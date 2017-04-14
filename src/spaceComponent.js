

function createSpaceElement(space, editMode) {
    console.log(space)
    let newSpace, spaceId, spaceName, spaceMemory, spaceDisk, editButton

    newSpace = document.createElement('div');

    spaceId = document.createElement('input')
    spaceId.type = 'input'
    spaceId.value = space.id || 0;
    spaceId.readOnly = !editMode

    spaceName = document.createElement('input')
    spaceName.type = 'input'
    spaceName.value = space.name;
    spaceName.readOnly = !editMode

    spaceMemory = document.createElement('input')
    spaceMemory.type = 'input'
    spaceMemory.value = space.memoryQuotaMB;
    spaceMemory.readOnly = !editMode;

    spaceDisk = document.createElement('input')
    spaceDisk.type = 'input'
    spaceDisk.value = space.diskQuotaMB;
    spaceDisk.readOnly = !editMode

    newSpace.appendChild(spaceId)
    newSpace.appendChild(spaceName)
    newSpace.appendChild(spaceMemory)
    newSpace.appendChild(spaceDisk)

    editButton = document.createElement('button')
    if (!editMode) {
        console.log('not editing')
        editButton.innerHTML = 'Edit Space'
        editButton.onclick = ((button, space) => () => editSpace(button, space))(editButton, newSpace)
    } else {
        console.log('editing')
        console.log(spaceMemory.readOnly)
        editButton.innerHTML = 'Save'
        editButton.onclick = ((button, space) => () => saveSpace(button, space))(editButton, newSpace)
    }

    newSpace.appendChild(editButton)

    return newSpace

}