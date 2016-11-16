let DnD2 = {}

/**
* By defaut, droppable will receive any group if it doesn't be especified
*/
DnD2.install = function (Vue) {
  Vue.directive('draggable', {
    bind: function (el, binding, vnode) {
      if (Object.keys(binding.modifiers).length === 0) {
        throw new Error('You have to specify almost one group in the modifier of draggable element')
      }
      let dragStart = (ev) => {
        ev.dataTransfer.effectAllowed = 'all'
        ev.dataTransfer.setData('data', JSON.stringify(binding.value))
        ev.dataTransfer.setData('group', JSON.stringify(Object.keys(binding.modifiers)))
      }
      el.setAttribute('draggable', true)
      el.addEventListener('dragstart', dragStart)
    },
    update: function (el, binding, vnode) {
      el.removeEventListener('dragstart', {})
      if (Object.keys(binding.modifiers).length === 0) {
        throw new Error('You have to specify almost one group in the modifier of draggable element')
      }
      let dragStart = (ev) => {
        ev.dataTransfer.effectAllowed = 'all'
        ev.dataTransfer.setData('data', JSON.stringify(binding.value))
        ev.dataTransfer.setData('group', JSON.stringify(Object.keys(binding.modifiers)))
      }
      el.setAttribute('draggable', true)
      el.addEventListener('dragstart', dragStart)
    },
    unbind: function (el, binding, vnode) {
      el.setAttribute('draggable', false)
      el.removeEventListener('dragstart', {})
    }
  })

  Vue.directive('droppable', {
    bind: function (el, binding, vnode) {
      let drop = (ev) => {
        if (ev.preventDefault) ev.preventDefault()
        if (ev.stopPropagation) ev.stopPropagation()
        let vData = ev.dataTransfer.getData('data')
        let vGroup = ev.dataTransfer.getData('group')
        let myGroup = JSON.parse(vGroup)
        let imIn = false
        if (binding.modifiers.length === 0) {
          imIn = true
        } else {
          imIn = myGroup.find((element, index, array) => { return binding.modifiers[element] })
        }
        if (imIn) {
          binding.value.call(el, vData)
          ev.target.classList.remove('dragover')
        } else {
          ev.target.classList.remove('dragover')
        }
      }
      let dragOver = (ev) => {
        if (ev.preventDefault) ev.preventDefault()
        ev.target.classList.add('dragover')
      }
      let dragLeave = (ev) => {
        if (ev.preventDefault) ev.preventDefault()
        ev.target.classList.remove('dragover')
      }
      el.addEventListener('drop', drop)
      el.addEventListener('dragover', dragOver)
      el.addEventListener('dragenter', dragOver)
      el.addEventListener('dragleave', dragLeave)
    },
    unbind: function (el, binding, vnode) {
      el.setAttribute('draggable', false)
      el.removeEventListener('dragstart', {})
    }
  })

  Vue.directive('dragenter', {
    bind: function (el, binding, vnode) {
      let dragEnter = (ev) => {
        if (ev.preventDefault) ev.preventDefault()
        if (ev.stopPropagation) ev.stopPropagation()
        ev.target.classList.add('dragover')
        binding.value.call(el)
      }
      el.addEventListener('dragenter', dragEnter)
    },
    unbind: function (el, binding, vnode) {
      el.removeEventListener('dragenter', {})
    }
  })
  Vue.directive('dragleave', {
    bind: function (el, binding, vnode) {
      let dragLeave = (ev) => {
        if (ev.preventDefault) ev.preventDefault()
        if (ev.stopPropagation) ev.stopPropagation()
        binding.value.call(el)
      }
      el.addEventListener('dragleave', dragLeave)
    },
    unbind: function (el, binding, vnode) {
      el.removeEventListener('dragleave', {})
    }
  })
}

module.exports = DnD2
