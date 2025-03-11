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

