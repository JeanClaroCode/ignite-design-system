import { replaceInFile } from 'replace-in-file'

async function fixPaths() {
  const options = {
    files: './storybook-static/index.html',
    from: /\.\/(sb-manager|sb-preview|sb-common-assets|sb-addons)\//g, // Expressão regular correta
    to: '/ignite-design-system/', // Seu nome de repositório
  }

  try {
    const changes = await replaceInFile(options)
    console.log('Caminhos corrigidos:', changes)
  } catch (error) {
    console.error('Erro ao corrigir caminhos:', error)
  }
}

fixPaths()
