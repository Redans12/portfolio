export interface PixelIcon {
  name: string
  rows: readonly string[]
}

export const pixelIcons: readonly PixelIcon[] = [
  {
    name: 'star',
    rows: ['...#...', '...#...', '#######', '.#####.', '..###..', '.##.##.', '.#...#.'],
  },
  {
    name: 'heart',
    rows: ['.##.##.', '#######', '#######', '#######', '.#####.', '..###..', '...#...'],
  },
  {
    name: 'sparkle',
    rows: ['...#...', '...#...', '..###..', '#######', '..###..', '...#...', '...#...'],
  },
]
