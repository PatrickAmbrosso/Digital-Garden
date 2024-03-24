import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/PatrickAmbrosso",
      GitHub: "https://github.com/PatrickAmbrosso",
      "Twitter (X)": "https://x.com/PatrickAmbrosso",
      Instagram: "https://www.instagram.com/PatrickAmbrosso",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Odysseys",
      folderClickBehavior: "link",
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: (node) => {
        // set containing names of everything you want to include
        const include = new Set([
          "Musings",
          "Reflections",
          "Expeditions",
          "Transcendence",
          "Showcase",
        ])
        return include.has(node.name) // && !!node.file
      },
      mapFn: (node) => {
        // don't change the name of the root node
        if (node.depth > 0) {
          // define a dictionary for mapping node names to icons
          const iconMapping: {[key: string]: string} = {
            Musings: "✨",
            Reflections: "📖",
            Expeditions: "🌏",
            Transcendence: "🙏",
            Showcase: "🎉",
          }

          // check if the node's name is in the dictionary
          if (node.file && node.name in iconMapping) {
            node.displayName = iconMapping[node.name] + " " + node.displayName
          }
        }
      },
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          Musings: 100,
          Reflections: 200,
          Expeditions: 300,
          Transcendence: 400,
          Showcase: 500,
        }

        let orderA = 0
        let orderB = 0

        if (a.file && a.file.slug) {
          orderA = nameOrderMap[a.file.slug] || 0
        } else if (a.name) {
          orderA = nameOrderMap[a.name] || 0
        }

        if (b.file && b.file.slug) {
          orderB = nameOrderMap[b.file.slug] || 0
        } else if (b.name) {
          orderB = nameOrderMap[b.name] || 0
        }

        return orderA - orderB
      },
      order: ["filter", "map", "sort"],
    })),
    Component.Backlinks(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Odysseys",
      folderClickBehavior: "link",
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: (node) => {
        // set containing names of everything you want to include
        const include = new Set([
          "Musings",
          "Reflections",
          "Expeditions",
          "Transcendence",
          "Showcase",
        ])
        return include.has(node.name) // && !!node.file
      },
      mapFn: (node) => {
        // don't change the name of the root node
        if (node.depth > 0) {
          // define a dictionary for mapping node names to icons
          const iconMapping: {[key: string]: string} = {
            Musings: "✨",
            Reflections: "📖",
            Expeditions: "🌏",
            Transcendence: "🙏",
            Showcase: "🎉",
          }

          // check if the node's name is in the dictionary
          if (node.file && node.name in iconMapping) {
            node.displayName = iconMapping[node.name] + " " + node.displayName
          }
        }
      },
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          Musings: 100,
          Reflections: 200,
          Expeditions: 300,
          Transcendence: 400,
          Showcase: 500,
        }

        let orderA = 0
        let orderB = 0

        if (a.file && a.file.slug) {
          orderA = nameOrderMap[a.file.slug] || 0
        } else if (a.name) {
          orderA = nameOrderMap[a.name] || 0
        }

        if (b.file && b.file.slug) {
          orderB = nameOrderMap[b.file.slug] || 0
        } else if (b.name) {
          orderB = nameOrderMap[b.name] || 0
        }

        return orderA - orderB
      },
      order: ["filter", "map", "sort"],
    })),
    Component.Backlinks(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),

  ],
}
