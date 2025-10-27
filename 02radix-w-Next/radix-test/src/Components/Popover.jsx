"use client";

import * as React from "react";
import { Popover } from "radix-ui";

export default function PopoverDemo() {
  return (
    <>
      <div>
        <p>this is the popover</p>
      </div>
      <Popover.Root>
        <Popover.Trigger>Display More info:</Popover.Trigger>

        <Popover.Portal>
          <Popover.Content className="border-2 border-amber-500">
            Some More Info...
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
