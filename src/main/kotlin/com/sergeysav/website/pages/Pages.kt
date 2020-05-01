package com.sergeysav.website.pages

import com.sergeysav.website.WebsiteGenerationContext
import com.sergeysav.website.resource.HtmlResource

/**
 * @author sergeys
 */
object Pages {
    var currentPage: WebPage? = null

    val navbarPages = listOf(
        AboutMePage,
        ProjectsPage
    )
}

fun WebsiteGenerationContext.addHtmlPage(path: String, webPage: WebPage) {
    addResource("page://${webPage.baseName}",
        HtmlResource(path, webPage)
    )
}
