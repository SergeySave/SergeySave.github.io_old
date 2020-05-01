package com.sergeysav.website.resource

import com.sergeysav.website.pages.WebPage
import kotlinx.html.html
import kotlinx.html.stream.appendHTML
import java.nio.file.FileSystems
import java.nio.file.Files

/**
 * @author sergeys
 *
 * @constructor Creates a new HtmlResource
 */
class HtmlResource(override val absoluteOutputPath: String, private val page: WebPage) : Resource {

    override fun onAdd(resourceString: String) {
        println("HTMLResource: Adding $resourceString")
    }

    override fun doOutput() {
        println("HTMLResource: Outputting to $absoluteOutputPath")

        Files.createDirectories(FileSystems.getDefault().getPath("docs/$absoluteOutputPath").parent)

        val output = Files.newBufferedWriter(FileSystems.getDefault().getPath("docs/$absoluteOutputPath"))

        output.append("<!DOCTYPE html>")
        output.appendHTML().html {
            page.createPage(this)
        }

        output.close()
    }
}