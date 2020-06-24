
GEN_LOCATION='../SergeySave.github.io/'

# This will compile and run the project
GEN_INTO=$GEN_LOCATION ./gradlew run Test

# Switch Directory
cd $GEN_LOCATION

git add .

git commit -m "Website updated by generated"

git push
