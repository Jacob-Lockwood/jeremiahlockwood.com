export const keywords = [
  "Jeremiah Lockwood",
  "Sway Machinery",
  "Jewish Music",
  "Cantor",
  "Cantors",
  "Cantorial Music",
  "Khazones",
  "Carolina Slim",
  "Jewlia Eisenberg",
  "Book of J",
  "Fraternal Order of the Society Blues",
  "Ricky Gordon",
  "Gordon Lockwood",
  "Blues",
  "Jacob Konigsberg",
  "Golden Ages",
  "House of Friendly Ghosts",
  "Hidden Melodies Revealed",
  "Khaira Arby",
  "Piedmont Blues",
  "Fingerpicking",
  "Guitar",
  "Blues Guitar",
  "Fingerpicking Guitar",
  "hazanut",
  "chazonut",
  "hazonut",
  "chazonus",
  "hazonus",
  "chazones",
  "hazones",
  "chazanus",
  "hazanus",
  "khzones",
  "chazzanut",
  "chazanut",
  "chazzonut",
  "hazzonut",
  "chazzonus",
  "hazzonus",
  "chazzones",
  "hazzones",
  "chazzanus",
  "hazzanus",
]

export interface musicFrontmatter {
  image: string
  previewText: string
  title: string
}

export const loadImage = (url: string): Promise<string> =>
  import(`${url}?url`).then<string>(mod => mod.default)
