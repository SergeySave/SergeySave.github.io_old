package com.sergeysav.website.resource

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
        Files.createDirectories(FileSystems.getDefault().getPath("docs/$absoluteOutputPath").parent)

        if (Files.exists(FileSystems.getDefault().getPath("src/main/resources/$inputResourcePath"))) {
            println("FileResource: Outputting $inputResourcePath to $absoluteOutputPath")

            Files.copy(
                FileSystems.getDefault().getPath("src/main/resources/$inputResourcePath"),
                FileSystems.getDefault().getPath("docs/$absoluteOutputPath"),
                StandardCopyOption.REPLACE_EXISTING
            )
        } else {
            System.err.println("FileResource: Could not find $inputResourcePath")
        }
    }
}