let option1 = prompt ("You are in a dim lit room. There is a door. You see a torch and a knife. Choose one.")

if (option1==='torch'){
    let option2 = prompt('You pick up the torch. You open the door to a hallway and see something running towards you. Do you fight or keep running? Type fight or run.')
    if (option2==='fight'){
        alert('You choose to burn the mysterious creature with the torch. It was a skinwalker. You run towards the door and you escape. Congratulations!!')
    }
    else if (option2==='run'){
       let option4 = prompt('You decided to keep running towards the door at the end of the hall but it is locked. The mysterious thing catches up with you. Do you keep trying to open the door or fight back? Type back or door.')
       if (option4==='door'){
        alert('You keep trying for the door but it does not budge. The creature catches up to you and you die. RIP.')
       }
       else if (option4==='back'){
        alert('You burn the creature and the door unlocks itself. You have escaped. CONGRATULATIONS!!')
       }
    }
}

else if (option1==='knife'){
    let option3 = prompt('You picked the knife. You open the door to a hallway and see something running towards you. Do you fight or keep running? Type scrimmage or hallway.')
    if (option3==='scrimmage'){
        let option5 = prompt('You stab the mysterious creature and it falls. It was a skinwalker. You run towards the end of the hallway and you hear scary sounds outside. Do you wait and listen or run out? Type wait or run.')
        if (option5=='wait'){
            alert('The skinwalker wakes up and uses your own knife to stab you from behind. You die. RIP.')
        }
        else if (option=='run'){
            alert('You run out. The sounds were only your imagination. You have escaped. CONGRATULATIONS!!!')
        }
    }
    else if (option3==='hallway'){
        let option6 = prompt('You run to the end of the hallway but the door is locked. Do you keep trying to open it or stab the mysterious creature? Type open or stab.')
    }
    if (option6==='open'){
        alert('You took too long and the creature caught up with you and killed you. RIP.')
    }
    else if (option6==='stab'){
        alert('You stab the creature and it falls. The door opens itself and you run out. You have escaped. CONGRATULATIONS!!!')
    }
}