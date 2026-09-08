import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { FlipSentences } from "./flip-sentences"

export function ProfileHeader() {
  return (
    <div className="flex items-end gap-4 border-b border-foreground/12 pt-8 pb-6 sm:gap-6">
      <AvatarLightsToggle className="group/avatar-lights-toggle mb-0.5 shrink-0 outline-none">
        <AvatarLights
          className="ring-border ring-offset-background group-focus-visible/avatar-lights-toggle:ring-1 group-focus-visible/avatar-lights-toggle:ring-offset-2"
          variants={USER.avatarVariants}
        />
      </AvatarLightsToggle>

      <div className="min-w-0 flex-1 pb-1">
        <h1 className="font-heading text-[2.25rem]/none font-bold tracking-tight sm:text-[2.5rem]/none">
          {USER.displayName}
        </h1>

        <FlipSentences className="mt-2 min-h-6">
          {USER.flipSentences}
        </FlipSentences>
      </div>
    </div>
  )
}
