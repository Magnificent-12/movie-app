# Hi there again :) 
Since you reach this page you are ready to start contributing on this project. Here are some instructions and heads up how to do that.

1. ### Please please please 
    before starting with any contribution, make sure you are taking the latest code from the **main** branch. To switch to the main branch, please type in:
    
    ```git checkout main``` 
2. ### Check for changes and pull them
    to check if the main branch is up to date with your local one run following command:

    ``` git fetch```
    
    if your output is any other than **Alread up to date**, please run:

    ``` git pull```

    to take the latest changes.
    ## Important note:
    If you see in the list of files that ***package.json*** is changed, please run the:
     ```npm i``` or ```npm install``` or ```yarn install``` 
     
     to update your depenedecies.

3. ### Now it's coding time
    Ok not yet :), before we do that, we need to make another branch since our ploicy will not allow us to commit code to the main branch. To make new branch please run following command in the cli: 

    ``` git checkout -b name-of-your-branch```

    for example: **git checkout -b create_search_bar**, you will be switched to a new brach where you will make your changes.

4. ### And after that?!
    Great that you've reached this part, now the only thing is to commit your code and wait to be reviewed by your peers. Let's check that process. 

    After you are done with your changes please run these commands to commit them:

    - ```git add . ``` to stage all your changes. Please mind the dot(**.**). The dot means all files I've woked on.

    - ``` git commit -m your_message``` 
    for example **git commit -m search_bar_component_created**, the message should be short and meaningful.

    - If you've just created and didn't push your branch yet please run:

        ``` git push --set-upstream origing name_of_your_branch```

        for example **git push --set-upstream origin create_search_bar**

    - If however your branch exists on remote repo, that you just need to run:

        ``` git push```
    
        Congratulations, that would be all that you need to do locally.

5. ### Pre commit hook

    To ensure we keep same code standards, we have added husky/pre commit  hooks. Before you are going to be able to commit any code, husky will run common checks and prevent commint if any error found. If you encounter such case, please follow cli output and fix menitioned errors.

6. ### Now the remote part
    
    Please go the [repo](https://github.com/Magnificent-12/movie-app) on github, where you should see a button called       **Pull Request**, please click on it and make your pr. Your code will be reviewed and mereged it the code meets all criteria.
    

# Thanks and Happy coding.

# Note this process will be reviewed and possibly siwtched to Visual Studio Code git client.

**If you have any questions or doubts, please feel free to reach Majra or Zlatan on Slack.**