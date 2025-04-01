# 常见问题解答 (Q&A)

## 安装与配置

### 1. 问：HACS 和加载项（Add-ons）有什么区别？

![HACS与加载项的区别](/hacs_error.png)

**答**：HACS（Home Assistant Community Store）和加载项（Add-ons）是 Home Assistant 中两个不同的扩展系统，很多新用户经常会混淆它们：

#### HACS（Home Assistant Community Store）
- **什么是HACS**：是由社区维护的第三方应用商店，提供自定义组件、前端卡片等
- **安装方式**：作为自定义集成安装到 Home Assistant 内部
- **兼容性**：所有类型的 Home Assistant 安装方式都支持（包括 Core 和 Container）
- **提供内容**：
  - 自定义集成（Custom Integrations）
  - 自定义前端卡片（Lovelace Cards）
  - 自定义主题（Themes）
  - YAML 配置（AppDaemon、NetDaemon等）
- **作用范围**：扩展 Home Assistant 内部功能

#### 加载项（Add-ons）
- **什么是加载项**：官方和第三方提供的附加应用，通常是独立的软件或服务
- **安装方式**：通过 Supervisor 管理，运行在 Home Assistant 系统之外（但集成在整体环境中）
- **兼容性**：只有 Home Assistant OS 和 Home Assistant Supervised 安装方式支持
- **提供内容**：
  - 独立应用（如 Node-RED、Mosquitto MQTT broker）
  - 数据库（如 MariaDB、InfluxDB）
  - 媒体服务（如 Plex、Jellyfin）
  - 辅助工具（如 File Editor、Terminal & SSH）
- **作用范围**：提供Home Assistant之外但与之集成的服务

#### 主要区别
1. **安装方式不同**：HACS是集成到Home Assistant内部的组件；加载项是在Home Assistant旁边运行的应用
2. **兼容性不同**：HACS几乎适用于所有安装方式；加载项只适用于OS和Supervised方式
3. **功能范围不同**：HACS主要提供UI组件和集成；加载项提供完整的应用程序和服务

#### 如何选择
- 如果需要自定义界面卡片、主题或特定集成，使用HACS
- 如果需要在Home Assistant环境中运行独立应用（如数据库、代理服务器等），使用加载项

请注意：如果您使用的是Container或Core安装方式，将无法使用加载项，但仍然可以手动安装这些服务（如MQTT、数据库等）并将它们与Home Assistant集成。

### 2. 问：hass-panel 应该通过哪种方式安装？

![hass-panel安装方式](/addon_store.png)

**答**：hass-panel 应该通过**加载项（Add-on）**方式安装，而不是通过HACS。

#### 正确安装方式：
1. **加载项方式安装（推荐）**：
   - 适用于 Home Assistant OS 和 Home Assistant Supervised 用户
   - 在Home Assistant界面中，导航到**设置 → 加载项 → 加载项商店**
   - 添加自定义存储库：`https://github.com/hass-panel/hass-panel`
   - 在加载项列表中找到并安装"hass-panel"
   - 安装后通过 Home Assistant 界面中的侧边栏直接访问

2. **Docker方式安装（替代方案）**：
   - 适用于使用 Home Assistant Container 或 Core 安装方式的用户
   - 使用问题3中提供的Docker命令安装
   - 需要单独访问hass-panel界面（不会集成到Home Assistant侧边栏）

#### 常见误区：
- **错误方式**：通过HACS安装
  - hass-panel 不是HACS集成或前端卡片，无法通过HACS安装
  - 在HACS中搜索会找不到hass-panel

如果您尝试在HACS中查找hass-panel但找不到，这是正常的，因为它是一个加载项而不是HACS组件。请按照上述正确方式进行安装。

### 3. 问：看到错误信息："您安装的 Home Assistant 不支持此重定向。要求 Home Assistant Operating system 或者 Home Assistant Supervised 安装方式。有关更多信息，请参阅文档。"

![Home Assistant 不支持此重定向](/no_addon.jpg)

**答**：此错误表明您当前使用的 Home Assistant 安装方式不支持某些功能或集成。Home Assistant 有几种不同的安装方式：

1. **Home Assistant Operating System**：推荐的安装方式，提供完整的系统环境，包含所有组件。
2. **Home Assistant Supervised**：在现有操作系统上安装，但仍提供完整的 Home Assistant 体验，包括加载项商店。
3. **Home Assistant Container**：Docker 容器安装方式，功能有限，没有加载项商店。
4. **Home Assistant Core**：直接安装到 Python 环境中，功能最为有限。

#### 使用 Docker 安装 hass-panel

如果您使用的是 Home Assistant Container 或 Core 安装方式并遇到了上述重定向错误，您可以通过 Docker 单独安装 hass-panel：

```bash
docker run \
  --name hass-panel \
  --restart unless-stopped \
  --network host \
  -v ./data/:/config/hass-panel \
  -d \
  registry.cn-hangzhou.aliyuncs.com/hass-panel/hass-panel:latest
```

参数说明：
- `./data/:/config/hass-panel` 是hass-panel的配置文件目录，您可以根据需要修改

完成安装后，您可以通过访问 `http://您的服务器IP:5123` 来使用 hass-panel。

### 4. 问：如何通过公网安全访问 hass-panel 和 Home Assistant？

**答**：由于 hass-panel 需要连接 Home Assistant 的 WebSocket 接口，在公网访问时需要特别注意确保 WebSocket 连接正常工作。以下是几种常见的解决方案：

#### 公网访问方案

1. **端口转发**：如果您的宽带有公网 IP，可以在路由器上设置端口转发。
2. **内网穿透**：如果没有公网 IP，可以使用 Frp、Ngrok、花生壳等内网穿透工具。
3. **VPN 解决方案**：最安全的方案，如 WireGuard、OpenVPN、Tailscale/ZeroTier 等。

#### 实现技术

无论选择哪种公网访问方案，通常都需要配合以下技术实现：

- **反向代理**：如 Nginx、Apache、Traefik 等，用于管理 HTTPS、路径映射和 WebSocket 支持。反向代理可以与上述任何方案结合使用，增强安全性和灵活性。

#### 关键注意事项

无论选择哪种方案，都需要注意以下几点：

- **WebSocket 支持**：确保您的方案支持 WebSocket 连接，这对 hass-panel 至关重要
- **安全性**：公网访问时，务必启用 HTTPS 和强密码保护
- **配置 hass-panel**：在 hass-panel 配置中，必须使用公网可访问的 Home Assistant 地址（如 `https://your-domain.com` 或公网 IP 地址），而不是内网地址（如 `http://192.168.1.x:8123`）

具体的实施方法请参考各方案的官方文档，或搜索相关教程进行配置。

### 5. 问：如何重新初始化Hass-Panel？

**答**：Hass-Panel 提供了重置功能，可以重新初始化配置。

1. 在 Hass-Panel 配置页面，打开“全局配置页面”。
2. 在“全局配置页面”中，找到“重新初始化”按钮。
3. 点击“重新初始化”按钮，确认重置。
4. 重置完成后，Hass-Panel 将恢复到初始状态，您需要重新配置，卡片配置会保留，用户数据会清空。

### 6. 问：无法打开 Hass-Panel 的时候如何重新初始化？

**答**：如果无法打开 Hass-Panel，可以尝试删除 Hass-Panel 的配置文件，然后重新启动加载项或者docker容器。

1. 如果您是 Hass-Panel 加载项用户：
   - 安装File Editor 加载项
   - 找到/config/hass-panel/hass_panel.db文件，删除它
   - 重新启动加载项

2. 如果您是 Hass-Panel Docker 用户：
   - 删除 Hass-Panel 的映射目录内的hass_panel.db文件
   - 重新启动 Docker 容器