rm -rf .git
git init
rm init.sh
git add .
git commit -m "🎉 Initial commit"
echo "Project initiated!"

cp .env.example .env
echo "Copied .env.example to .env"
