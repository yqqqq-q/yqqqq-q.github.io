import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "acknowledgments"

export function Acknowledgments() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Acknowledgments</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelDescription>
        This site is based on{" "}
        <a
          className="link-underline"
          href="https://github.com/ncdai/chanhdai.com"
          target="_blank"
          rel="noopener"
        >
          ncdai/chanhdai.com
        </a>
        , inspired by Tailwind CSS, shadcn/ui, and Vercel.
      </PanelDescription>
    </Panel>
  )
}
