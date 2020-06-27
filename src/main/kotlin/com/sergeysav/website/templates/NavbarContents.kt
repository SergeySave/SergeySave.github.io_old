package com.sergeysav.website.templates

import com.sergeysav.website.WebsiteGenerationContext
import com.sergeysav.website.pages.Pages
import kotlinx.html.*

/**
 * @author sergeys
 */
fun DIV.navbarContents() {
    for (page in Pages.navbarPages) {
        if (page.subPages.isNotEmpty()) {
            div(classes = "ui dropdown item") {
                +page.name
                i(classes = "ui dropdown icon")
                div(classes = "menu") {
                    this.style = "max-width: 60vw;"
                    a(classes = "item ${if (page == Pages.currentPage) "active" else ""}") {
                        this.style = "overflow: hidden; text-overflow: ellipsis;"
                        href = WebsiteGenerationContext.getResource("page://${page.baseName}").relativeOutputPath()
                        +"Overview"
                    }
                    for (subPage in page.subPages) {
                        a(classes = "item ${if (subPage == Pages.currentPage) "active" else ""}") {
                            this.style = "overflow: hidden; text-overflow: ellipsis;"
                            href = WebsiteGenerationContext.getResource("page://${subPage.baseName}").relativeOutputPath()
                            +subPage.name
                        }
                    }
                }
            }
        } else {
            a(classes = "item ${if (page == Pages.currentPage) "active" else ""}") {
                if (page == Pages.currentPage) {
                    this.style = "font-weight: bolder;"
                }
                href = WebsiteGenerationContext.getResource("page://${page.baseName}").relativeOutputPath()
                +page.name
            }
        }
    }
}