# Class 03 - Git

## Tuesday MorningJune 27th 2023

## Notes
* Git has a special label called HEAD, it basically means "You Are Here"
* Git: version control system
* Github: commericial service for hosting the data

* to do it without VSCode:
  * Create a repository online
  * click on the top right "Clone" and choose the HTTPS (cuz it's easier)
  * create/go to the local directory you want the repository to live in
  * git clone <HTTPS PATH>
  * Bada-bing! This is now sitting on your local computer
  * also worth noting, you can use github cli (gh is git's own terminal)
    * gh is worth understanding more
* `git add <FILENAME>` 

* A-C-P
  * Add
    * The "add" step allows you to stage changes made to your files and prepare them for a commit. You can use the git add command to add specific files or directories to the staging area. For example, `git add file1.txt` or `git add .` to add all modified files.
  * Commit
    * The "commit" step creates a snapshot of the changes you have staged in the previous "add" step. It records a new version of your project's history with a commit message explaining the changes made. You can use the git commit command along with the -m option to include a commit message. For example, `git commit -m "Add feature XYZ"`.
    
  * Push
    * The "push" step involves sending your committed changes from your local repository to a remote repository (GitHub). It makes your changes visible to others and updates the remote repository with your latest commits. `git push origin main` to push your changes to the "main" branch of the remote repository named "origin".


* typical work flow:
  1. `git add <file>`
  1. `git commit -m "message for why we're staging the files"`
  1. `git push origin main`
  1. `git status` // shows what files are staged/modified/etc, use whenever


## Q&A's
1. What is Version Control?
  * keeps track of multiple files across a diverse set of directories and different coders
  * without version control distributed teams would be overwriting 

2. What is cloning in Git?
  * Copies a cloud instance to a local computer
  * it can be done in a variety of ways
  * it does not imply continuous sync - it's a one time thing

3. What is the command to track and stage files?
  * `git add <file(s)>`

4. What is the command to take a snapshot of your changed files?
  * `git commit`

5. What is the command to send your changed files to Github?
  * `git push origin main`


## Visuals

![Visual representation of what happens to a file in git](https://blog.udemy.com/wp-content/uploads/2015/08/image006.png)

Backup visual representation of what happens to a file in git: https://blog.udemy.com/wp-content/uploads/2015/08/image006.png
