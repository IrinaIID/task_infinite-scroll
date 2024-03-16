export type DataPhoto = {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: number,
  avg_color: string,
  src: {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string
  },
  liked: boolean,
  alt: string
}

export type LogoSvgProps = { color: string }

export type ScrollProps = { yourKey: string | null}

export type PropsPhotoCard = {
  name: string,
  photographer: string,
  img: string,
  link: string
}

export type GlobalContent = {
  apiKey: string
  setApiKey:(c: string) => void
}