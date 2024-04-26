import React from 'react'
import { createComponent } from '@lit/react'
import { GdsGroupedList } from '@sebgroup/green-core/components/grouped-list'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

export const GroupedList = createComponent({
  tagName: getScopedTagName('gds-grouped-list'),
  elementClass: GdsGroupedList,
  react: React,
})

export const ListItem = createComponent({
  tagName: getScopedTagName('gds-list-item'),
  elementClass: GdsGroupedList,
  react: React,
})
