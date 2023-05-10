### webrtc chat with php backend and rooms feature


#### Install

```bash
git clone https://github.com/kuzovkov/chat7
cd chat7
sudo docker-compose -f docker-compose.dev.yml build
sudo docker-compose -f docker-compose.dev.yml up -d
```

#### Get SSl certificates
rename nginx/conf.d/default-ssl.conf -> nginx/conf.d/default-ssl.conf.bak

```bash
mv nginx/conf.d/default-ssl.conf nginx/conf.d/default-ssl.conf.bak
mv nginx/conf.d/default.conf.bak nginx/conf.d/default.conf

./certbot.sh <domain-name>

mv nginx/conf.d/default-ssl.conf.bak nginx/conf.d/default-ssl.conf 
mv nginx/conf.d/default.conf nginx/conf.d/default.conf.bak
 
docker-compose restart nginx
```
Go to https://domain-name/




