package com.sergeysav.website.resource

import com.sergeysav.website.WebsiteGenerationContext
import java.util.*
import kotlin.math.min

/**
 * @author sergeys
 */
interface Resource {

    fun relativeOutputPath(): String {
        val thisParts = absoluteOutputPath.split("/")
        val relParts = WebsiteGenerationContext.pathRelativeTo.split("/").toMutableList()

        if (relParts[relParts.lastIndex] == "") {
            relParts.removeAt(relParts.lastIndex)
        }

        val resParts = LinkedList<String>()

        val size = min(thisParts.size, relParts.size)
        for (i in 0 until size) {
            if (thisParts[i] == relParts[i]) continue
            resParts.addLast(thisParts[i])
            resParts.addFirst("..")
        }
        for (i in size until thisParts.size) {
            resParts.addLast(thisParts[i])
        }
        for (i in size until relParts.size) {
            resParts.addFirst("..")
        }

        return resParts.joinToString("/")
    }

    val absoluteOutputPath: String

    fun onAdd(resourceString: String)

    fun doOutput()
}