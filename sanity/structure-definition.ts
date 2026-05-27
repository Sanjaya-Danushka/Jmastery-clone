import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('resources').title('Resources'),
      S.documentTypeListItem('resourcesPlaylist').title('Playlists'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['resources', 'resourcesPlaylist'].includes(item.getId()!),
      ),
    ])
