package com.sergeysav.website.resource

import com.sergeysav.website.WebsiteGenerationContext
import java.nio.file.FileSystems
import java.nio.file.Files
import java.nio.file.StandardCopyOption

/**
 * @author sergeys
 *
 * @constructor Creates a new FileResource
 */
class FileResource(
    private val inputResourcePath: String,
    override val absoluteOutputPath: String
) : Resource {

    override fun onAdd(resourceString: String) {
        println("FileResource: Adding $resourceString to $absoluteOutputPath")
    }

    override fun doOutput() {
        Files.createDirectories(FileSystems.getDefault().getPath("${WebsiteGenerationContext.generateInto}/$absoluteOutputPath").parent)

        if (Files.exists(FileSystems.getDefault().getPath("src/main/resources/$inputResourcePath"))) {
            println("FileResource: Outputting $inputResourcePath to $absoluteOutputPath")

            Files.copy(
                FileSystems.getDefault().getPath("src/main/resources/$inputResourcePath"),
                FileSystems.getDefault().getPath("${WebsiteGenerationContext.generateInto}/$absoluteOutputPath"),
                StandardCopyOption.REPLACE_EXISTING
            )
        } else {
            System.err.println("FileResource: Could not find $inputResourcePath")
        }
    }
}