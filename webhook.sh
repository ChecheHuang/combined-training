#git項目路徑
gitPath=""
#git 網址
gitHttp=""

if [ -d "$gitPath" ]; then
        cd $gitPath
        if [ ! -d ".git" ]; then
                git clone $gitHttp gittemp
                mv gittemp/.git .
                rm -rf gittemp
        fi
        git pull 
        echo "End"
        exit
else
        echo "該項目路徑不存在"
        echo "End"
        exit
fi