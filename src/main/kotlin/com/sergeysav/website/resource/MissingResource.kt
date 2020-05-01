package com.sergeysav.website.resource

/**
 * @author sergeys
 *
 * @constructor Creates a new MissingResource
 */
object MissingResource : Resource {
    override val absoluteOutputPath: String = "404.html"

    override fun onAdd(resourceString: String) {
    }

    override fun doOutput() {
    }
}