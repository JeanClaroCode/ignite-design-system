import { replaceInFile } from 'replace-in-file' // Use import

const options = {
  files: './storybook-static/index.html',
  from: /\.\/(sb-manager|sb-preview|sb-common-assets|sb-addons)\//g,
  to: '/ignite-design-system/',
}

try {
  const changes = await replaceInFile(options) // Use await
  console.log('Caminhos corrigidos:', changes)
} catch (error) {
  console.error('Erro ao corrigir caminhos:', error)
}
