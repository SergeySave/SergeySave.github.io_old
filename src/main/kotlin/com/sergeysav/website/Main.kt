package com.sergeysav.website

import com.sergeysav.website.pages.AboutMePage
import com.sergeysav.website.pages.ProjectsPage
import com.sergeysav.website.pages.addHtmlPage
import com.sergeysav.website.pages.projects.AlgorithmVisualizerProjectPage
import com.sergeysav.website.pages.projects.ChessNeuralNetworkProjectPage
import com.sergeysav.website.pages.projects.PlanetRendererProjectPage
import com.sergeysav.website.pages.projects.RBMCProjectPage
import com.sergeysav.website.pages.projects.SpaceGameProjectPage
import com.sergeysav.website.resource.OutputMappingResource
import java.nio.file.FileSystems
import java.nio.file.Files
import java.util.*

/**
 * @author sergeys
 */
fun main() {
    WebsiteGenerationContext.initialize(System.getenv("GEN_INTO"))

    WebsiteGenerationContext.addResource("file://css.css",
        OutputMappingResource("css/main.css")
    )
    WebsiteGenerationContext.addResource("file://images/me.jpg",
        OutputMappingResource("me.jpg")
    )

    WebsiteGenerationContext.addHtmlPage("index.html", AboutMePage)
    WebsiteGenerationContext.addHtmlPage("projects/index.html", ProjectsPage)

    WebsiteGenerationContext.addHtmlPage("projects/rbmc/index.html", RBMCProjectPage)
    WebsiteGenerationContext.addHtmlPage("projects/algorithm_visualizer/index.html", AlgorithmVisualizerProjectPage)
    WebsiteGenerationContext.addHtmlPage("projects/space_game/index.html", SpaceGameProjectPage)
    WebsiteGenerationContext.addHtmlPage("projects/chess_neural_network/index.html", ChessNeuralNetworkProjectPage)
    WebsiteGenerationContext.addHtmlPage("projects/planet_renderer/index.html", PlanetRendererProjectPage)

    WebsiteGenerationContext.output()
}