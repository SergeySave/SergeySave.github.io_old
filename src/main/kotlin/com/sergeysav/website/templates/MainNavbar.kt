package com.sergeysav.website.templates

import com.sergeysav.website.trimJavaScript
import kotlinx.html.*

/**
 * @author sergeys
 */
fun BODY.mainNavbar() {
    div(classes = "ui large top fixed hidden menu right") {
        div(classes = "ui container") {
            navbarContents()
        }
    }
    div(classes = "ui vertical inverted sidebar menu right") {
        navbarContents()
    }
    script(type = ScriptType.textJavaScript) {
        unsafe {
            raw("""
${'$'}(document)
.ready(function () {
    // fix menu when passed
    ${'$'}('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            ${'$'}('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            ${'$'}('.fixed.menu').transition('fade out');
        }
    });

    // create sidebar and attach to menu open
    ${'$'}('.ui.sidebar').sidebar('attach events', '.toc.item');
});
        """.trimJavaScript())
        }
    }
}