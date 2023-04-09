# Gift recommendation - React Native app

This is an gift recommendations generator app used in the OpenAI API [quickstart tutorial](https://platform.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React Native](https://reactnative.dev/).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Install the requirements

   ```bash
   $ npm install
   ```

4. Run the app

   ```bash
   $ npm start
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).

echo "# Gift" >> README.md

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Monica-Zhang-git/Gift.git
git push -u origin main

connect to aws ec2
ssh -i ~/.ssh/monica.pem ubuntu@13.211.157.13

project directory
ubuntu@ip-172-31-18-49:~/Gift$ pwd
/home/ubuntu/Gift

npm directory
ubuntu@ip-172-31-18-49:~/Gift$ which npm
/home/ubuntu/.nvm/versions/node/v18.15.0/bin/npm

daemon configuration directory
ubuntu@ip-172-31-18-49:/etc/supervisor/conf.d$ pwd
/etc/supervisor/conf.d

[program:webserver]
command=/home/ubuntu/.nvm/versions/node/v18.15.0/bin/npm run dev
user=ubuntu
directory=/home/ubuntu/Gift
autostart=true
autorestart=true
redirect_stderr=true
stdout_logfile=/home/ubuntu/Gift/log

update daemon configuration
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl restart all
sudo supervisorctl status
