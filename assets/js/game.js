
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;

// console.log(playerName, playerAttack, playerHealth);

var fight = function() {
    var playerName = window.prompt("What is your robot's name?");


    

    // repeat and execute as long as the enemy robot is alive 
    while (enemyHealth  > 0 && playerHealth > 0) {
        //ask user if they like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip and then stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
             if (confirmSkip) {    
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;  
            }
        }
        
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
            } else {
                window.alert(enemyNames[i] + ' still has ' + enemyHealth + ' health left.');
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
 



             // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");

            if (playerHealth > 0) {
                // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            
                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];
            
                // reset enemyHealth before starting new fight
                enemyHealth = 50;
            
                // use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;
            
                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);
        
                } else {
                    window.alert("You have lost your robot in battle! Game Over!");
                    }

            //leave while() loop of player is dead        
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }

fight()