// script for AWS CodeCommit

git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

//download from S3
aws s3 cp s3://wildrydes-us-east-1/WebApplication/1_StaticWebHosting/website ./ --recursive

//Setup
//複製好之後push上去Repo，並到Amplify Console console page開始自動化佈屬流程，點選Deploy下面的Start，如果是控制台頁面點選Connect，
//點選完之後，保持預設設定（當然有特殊需求可以根據自己情況修改），
//接下來會開始部署流程，可以點入Provision觀察Log

//Creating process
//可以知道他們是直接拉Docker來創建流程，如果一直部署有問題可以考慮拉他們的Image自己本地測試，
//接下來Build流程會開始Clone流程，會從Repo Clone到容器內開始Build
//完成之後可以點選網址，就可以看到部署玩的網頁內容，可以點選Verify，會自動幫忙Scale各個手機版面的View。

//Selection
//之後只要改變Repo然後Push的話，Amplify Console會自動幫你進行到佈建流程，

//Suggestion
//所以建議大家不要用Master來當作開發的分支，盡量在Code Review完之後再Merge進來做Deploy的動作。

//Create Amazon Cognito
//使用Cognito用戶身份驗證
//首先建立身份集區

//點選管理使用者集區，然後點選建立使用者集區，
//填入唯一名稱，然後點選預設值，直接按建立，可以根據自己需求更改，

//建立完成之後點選左邊一般設定的應用程式用戶端來建立WebApp連線使用的設定檔，

//取消產生用戶端密碼讓使用者自行輸入，填用戶端名稱（userPoolId），
//建立完成會有一組連線的key，把他複製出來，到上一段的Repo裡面的js/config.js，打開之後填入剛剛的資訊

//Insert PoolId
//並且在這裡填入PoolId（ 在使用者集區上面），然後儲存之後Push上去

//等到部署完成之後，可以到網址下的
//register.html裡註冊帳號，完成之後如果點選沒反應，代表有問題，記得打開瀏覽器的DevTool檢查Error。填完之後會寄一封認證信到信箱並到認證頁面。

//然後驗證完之後就可以實施登入動作了。
//在OSX這邊使用者可能會遇到Push上去有403的問題，問題原因在於Mac會將金鑰存入鑰匙圈，然後15分鐘後AWS那邊會刷新，就會有403的狀況，有幾個方法
//1. 修改codecommit驗證金鑰成顯性金鑰
//2. 改用SSH Push
//3. 直接在Mac裡搜尋Keychain，在Keychain內搜尋AWS Region(us-eastXXX)，會看到Git-codecommit開頭的金鑰，進入之後到取用控制，把應用程式刪除，就可以使用，每次都會詢問，都要按拒絕，比較煩人的是每次Fetch都會問，最好的方式是用上面兩種方法。