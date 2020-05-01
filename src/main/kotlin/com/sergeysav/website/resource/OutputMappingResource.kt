package com.sergeysav.website.resource

/**
 * @author sergeys
 *
 * @constructor Creates a new MappingResource
 */
class OutputMappingResource(override val absoluteOutputPath: String) : Resource {

    override fun onAdd(resourceString: String) {
        println("OutputMappingResource: Adding $resourceString -> $absoluteOutputPath")
    }

    override fun doOutput() {}
}
