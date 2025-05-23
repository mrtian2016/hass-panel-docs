# 安装指南

Hass-Panel 提供了多种安装方式，您可以根据自己的需求选择合适的安装方法。

## 安装方式

### 1. Home Assistant 插件安装（推荐）

#### 方式一：一键添加（推荐）

点击下面的按钮将 Hass-Panel 添加到您的 Home Assistant：

[![添加到Home Assistant](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmrtian2016%2Fhass-panel)

#### 方式二：手动添加

1. 在 Home Assistant 的侧边栏中，点击"配置" -> "加载项" -> "加载项商店"
2. 点击右上角的三个点，选择"存储库"
3. 添加存储库地址：`https://github.com/mrtian2016/hass-panel`
4. 点击"添加"并刷新页面
5. 在加载项商店中找到并安装"Hass Panel"
6. 启动后即可在侧边栏访问

### 2. Docker 安装

使用以下命令启动 Hass-Panel：

```bash
docker run \
  --name hass-panel \
  --restart unless-stopped \
  --network host \
  -v ./data/:/config/hass-panel \
  -d \
  registry.cn-hangzhou.aliyuncs.com/hass-panel/hass-panel:latest
```

这个命令会：
- 创建一个名为 `hass-panel` 的容器
- 设置容器自动重启
- 将配置文件保存在主机的 `./data/` 目录
- 使用最新版本的 Hass-Panel 镜像
- 访问地址：http://your-docker-host:5123

### 3. Docker Compose 安装

如果您更喜欢使用 Docker Compose 来管理容器，可以按照以下步骤操作：

1. 创建一个 `docker-compose.yml` 文件，内容如下：

```yaml
version: '3'
services:
  hass-panel:
    container_name: hass-panel
    image: registry.cn-hangzhou.aliyuncs.com/hass-panel/hass-panel:latest
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./data:/config/hass-panel
```

2. 在 `docker-compose.yml` 文件所在目录运行以下命令启动服务：

```bash
docker-compose up -d
```

这将创建并启动 Hass-Panel 容器，配置与 Docker 安装方式相同。
- 访问地址：http://your-docker-host:5123

## 升级说明

### Home Assistant 插件版本升级

1. 在 Home Assistant 的加载项商店中找到 Hass Panel
2. 点击"更新"按钮
3. 等待更新完成后重启插件

### Docker 版本升级

```bash
# 拉取最新镜像
docker pull registry.cn-hangzhou.aliyuncs.com/hass-panel/hass-panel:latest

# 停止并删除旧容器
docker stop hass-panel
docker rm hass-panel

# 使用新镜像重新创建容器
docker run \
  --name hass-panel \
  --restart unless-stopped \
  -v ./data/:/config/hass-panel \
  -d \
  registry.cn-hangzhou.aliyuncs.com/hass-panel/hass-panel:latest
```

### Docker Compose 版本升级

在 `docker-compose.yml` 文件所在目录运行以下命令升级服务：

```bash
# 拉取最新镜像并重新创建容器
docker-compose pull
docker-compose up -d
```
