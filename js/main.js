function renderProjects(projects) {
  const template = document.getElementById('project-template')
  const grid = document.getElementById('project-grid')

  if (!template || !grid) return

  const fragment = document.createDocumentFragment()

  projects.forEach((project, index) => {
    const clone = template.content.cloneNode(true)

    const img = clone.querySelector('.project-image img')
    img.src = project.image
    img.alt = `${project.title} 썸네일`

    clone.querySelector('.project-title').textContent = project.title
    clone.querySelector('.project-description').textContent =
      project.description

    const tagList = clone.querySelector('.project-tags')
    project.tags.forEach((tag) => {
      const li = document.createElement('li')
      li.className = 'tag'
      li.textContent = tag
      tagList.appendChild(li)
    })

    const demoBtn = clone.querySelector('.btn-primary')
    const codeBtn = clone.querySelector('.btn-secondary')
    const actions = clone.querySelector('.project-actions')

    if (project.demoUrl) {
      demoBtn.href = project.demoUrl
    } else {
      demoBtn.remove()
    }

    if (project.codeUrl) {
      codeBtn.href = project.codeUrl
    } else {
      codeBtn.remove()
    }

    // 두 버튼이 모두 없으면 버튼 영역 자체를 숨김
    if (!project.demoUrl && !project.codeUrl) {
      actions.style.display = 'none'
    }

    const card = clone.querySelector('.project-card')
    card.style.setProperty('--delay', `${index * 60}ms`)

    fragment.appendChild(clone)
  })

  grid.appendChild(fragment)
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(PROJECTS)
})
