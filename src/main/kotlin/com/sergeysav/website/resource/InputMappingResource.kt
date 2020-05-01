package com.sergeysav.website.resource

/**
 * @author sergeys
 *
 * @constructor Creates a new MappingResource
 */
class InputMappingResource(val newResource: String) : Resource {

    override val absoluteOutputPath: String = ""

    override fun onAdd(resourceString: String) {
        println("InputMappingResource: Adding $resourceString -> $newResource")
    }

    override fun doOutput() {}
}
