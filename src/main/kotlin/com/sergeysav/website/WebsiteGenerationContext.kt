package com.sergeysav.website

import com.sergeysav.website.resource.FileResource
import com.sergeysav.website.resource.InputMappingResource
import com.sergeysav.website.resource.OutputMappingResource
import com.sergeysav.website.resource.MissingResource
import com.sergeysav.website.resource.Resource
import java.io.File
import java.nio.file.FileSystems
import java.nio.file.Files
import java.nio.file.Path
import java.util.*
import kotlin.collections.HashMap


/**
 * @author sergeys
 */
object WebsiteGenerationContext {

    var generateInto: String = "../SergeySave.github.io/"
    var pathRelativeTo: String = ""

    private val resources = mutableMapOf<String, Resource>()
    private val newResources = mutableMapOf<String, Resource>()

    fun initialize() {
        println("Clearing Output Folder")
        val docsFolder = FileSystems.getDefault().getPath(generateInto)
        Files.walk(docsFolder).use { walk ->
            walk.sorted(Comparator.reverseOrder())
                .map { obj: Path -> obj.toFile() }
                .forEach { obj: File ->
                    if (!(obj.path.contains("/.git/?".toRegex()) || obj.path == generateInto || obj.path.endsWith("CNAME"))) {
                        obj.delete()
                    }
                }
        }
//        Files.createDirectory(docsFolder)
        resources.clear()
    }

    fun addResource(resourceString: String, resource: Resource) {
        resource.onAdd(resourceString)
        newResources[resourceString] = resource
    }

    fun getResource(resource: String, desiredOutput: String? = null): Resource {
        val existing = newResources[resource]
        if (existing != null) {
            return when (existing) {
                is OutputMappingResource -> {
                    newResources.remove(resource)
                    resources.remove(resource)
                    getResource(resource, existing.absoluteOutputPath)
                }
                is InputMappingResource -> {
                    getResource(existing.newResource, desiredOutput)
                }
                else -> {
                    existing
                }
            }
        }
        println("Requesting New $resource")

        val index = resource.indexOf("://")
        val type = resource.substring(0, index)
        val path = resource.substring(index + 3)

        val r = if (type == "file") {
            FileResource(path, desiredOutput ?: path)
        } else {
            MissingResource
        }

        newResources[resource] = r

        return r
    }

    fun output() {
        println("Starting Output Generation")

        do {
            val diff = HashMap(newResources)
            resources.keys.forEach {
                diff.remove(it)
            }
            resources.putAll(diff)
            diff.forEach { (_, r) ->
                r.doOutput()
            }
        } while (diff.isNotEmpty())

        println("Output Completed")
    }
}