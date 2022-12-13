import { MdVideocam } from 'react-icons/md'

export default {
  name: 'video',
  title: 'Vidéo',
  type: 'document',
  icon: MdVideocam,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'youtubeId',
      title: 'ID Youtube',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video',
    },
  ],
  preview: {
    select: { title: 'title', youtubeId: 'youtubeId' },
    prepare(selection: any) {
      const { title, youtubeId } = selection
      const media = `https://img.youtube.com/vi/${youtubeId}/0.jpg`
      return {
        title: title,
        media: media,
      }
    },
  },
}
