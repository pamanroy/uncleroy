import remarkClassNames from 'remark-class-names'
const classMap = {
  paragraph: 'my-6 leading-6 text-pretty tracking-wide first:mt-0 last:mb-0',
  'heading[depth=2]': 'text-lg font-bold',
  'paragraph link': 'text-sky-500 hover:text-sky-400',
  'paragraph inlineCode': 'text-sky-500'
}

export default function htmlClassNames() {
  return remarkClassNames({ classMap })
}