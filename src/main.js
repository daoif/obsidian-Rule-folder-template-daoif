/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => MyPlugin
});
var import_obsidian = __toModule(require("obsidian"));
var mplugin;
var DEFAULT_SETTINGS = {
  \u65B0\u6587\u6863\u6839\u76EE\u5F55: "",
  \u6A21\u677F\u6587\u4EF6\u8DEF\u5F84: ""
};
var MyPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      mplugin = this;
      const ribbonIconEl = this.addRibbonIcon("pane-layout", "\u89C4\u5219\u6587\u4EF6\u5939\u6A21\u677F", (evt) => {
        new \u89C4\u52191\u6A21\u6001\u6846(this.app).open();
      });
      ribbonIconEl.addClass("my-plugin-ribbon-class");
      this.addCommand({
        id: "open-month-rule-create-fold",
        name: "\u6708\u4EFD\u89C4\u5219",
        callback: () => {
          new \u89C4\u52191\u6A21\u6001\u6846(this.app).open();
        }
      });
      this.addSettingTab(new SampleSettingTab(this.app, this));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var \u89C4\u52191\u6A21\u6001\u6846 = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
    this.app = app;
  }
  onOpen() {
    return __async(this, null, function* () {
      const { titleEl } = this;
      const { contentEl } = this;
      const mythis = this;
      titleEl.setText("\u8BF7\u8F93\u5165\u6587\u4EF6\u540D");
      const controlEl = contentEl.createEl("div");
      controlEl.style.cssText = "width:300px;height:40px;margin:0 auto;";
      const input = controlEl.createEl("input");
      input.style.cssText = "width:300px;height:40px;margin:0 auto;font-size:22px;";
      input.focus();
      input.addEventListener("keydown", keydown);
      function keydown(event) {
        if (event.keyCode == 13) {
          \u6267\u884C\u51FD\u6570(input.value);
          mythis.close();
        }
      }
      function \u6267\u884C\u51FD\u6570(\u8F93\u5165\u6587\u4EF6\u540D) {
        return __async(this, null, function* () {
          if (\u8F93\u5165\u6587\u4EF6\u540D == null) {
            return "";
          }
          var \u6307\u5B9A\u8DEF\u5F84 = mplugin.settings.\u65B0\u6587\u6863\u6839\u76EE\u5F55;
          var \u6587\u6863\u6A21\u677F = mplugin.settings.\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84;
          var \u5F85\u590D\u5236\u6587\u672C = yield \u521B\u5EFA\u6587\u6863(\u6307\u5B9A\u8DEF\u5F84, \u6587\u6863\u6A21\u677F);
          console.log("\u5F85\u590D\u5236\u6587\u672C" + \u5F85\u590D\u5236\u6587\u672C);
          navigator.clipboard.writeText(\u5F85\u590D\u5236\u6587\u672C);
          function \u683C\u5F0F\u5316\u65F6\u95F4(date) {
            var \u62FC\u63A5 = "";
            var \u65E5\u671F = date.getDate();
            var \u6708 = date.getUTCMonth() + 1;
            var \u5E74 = date.getFullYear();
            \u62FC\u63A5 = "-" + \u5E74 + "-" + \u6708 + "-" + \u65E5\u671F;
            return \u62FC\u63A5;
          }
          function \u521B\u5EFA\u6587\u6863(\u6307\u5B9A\u8DEF\u5F842, \u6307\u5B9A\u6587\u6863\u6A21\u677F) {
            return __async(this, null, function* () {
              var date = new Date();
              var y = date.getFullYear();
              var \u5E74\u8DEF\u5F84 = "\\" + y;
              var m = date.getMonth() + 1;
              var \u6708\u8DEF\u5F84 = "\\" + m;
              var \u5168\u8DEF\u5F84 = \u6307\u5B9A\u8DEF\u5F842 + \u5E74\u8DEF\u5F84 + \u6708\u8DEF\u5F84;
              mythis.app.vault.createFolder(\u5168\u8DEF\u5F84);
              let date2 = new Date();
              var \u65F6\u95F4\u540E\u7F00 = \u683C\u5F0F\u5316\u65F6\u95F4(date2);
              var \u521B\u5EFA\u6587\u4EF6\u540D = \u5168\u8DEF\u5F84 + "\\" + \u8F93\u5165\u6587\u4EF6\u540D + \u65F6\u95F4\u540E\u7F00 + ".md";
              var \u6587\u6863\u5185\u5BB9 = yield mythis.app.vault.read(mythis.app.vault.getAbstractFileByPath(\u6587\u6863\u6A21\u677F));
              \u6587\u6863\u5185\u5BB9 = \u66FF\u6362\u5185\u5BB9(\u6587\u6863\u5185\u5BB9);
              mythis.app.vault.create(\u521B\u5EFA\u6587\u4EF6\u540D, \u6587\u6863\u5185\u5BB9);
              var \u5F85\u590D\u5236\u6587\u672C2 = "[[" + \u8F93\u5165\u6587\u4EF6\u540D + \u65F6\u95F4\u540E\u7F00 + "|" + \u8F93\u5165\u6587\u4EF6\u540D + "]]";
              return \u5F85\u590D\u5236\u6587\u672C2;
            });
          }
          function \u66FF\u6362\u5185\u5BB9(\u539F\u6587\u672C) {
            var \u65B0\u5185\u5BB9 = \u539F\u6587\u672C.replace("%ruleName%", \u8F93\u5165\u6587\u4EF6\u540D);
            return \u65B0\u5185\u5BB9;
          }
        });
      }
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "\u89C4\u5219\u6587\u4EF6\u5939\u6A21\u677F" });
    new import_obsidian.Setting(containerEl).setName("\u65B0\u6587\u6863\u6839\u76EE\u5F55").setDesc("\u4E3E\u4F8B1:\u9879\u76EE    \u4E3E\u4F8B2:\u9879\u76EE/\u5B50\u6587\u4EF6\u5939").addText((text) => text.setPlaceholder("\u7559\u7A7A\u5C06\u521B\u5EFA\u5728\u6839\u76EE\u5F55\u4E0B.").setValue(this.plugin.settings.\u65B0\u6587\u6863\u6839\u76EE\u5F55).onChange((value) => __async(this, null, function* () {
      console.log("Secret: " + value);
      this.plugin.settings.\u65B0\u6587\u6863\u6839\u76EE\u5F55 = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84").setDesc("\u4E3E\u4F8B1:\u6A21\u677F/\u6A21\u677F\u6587\u4EF61.md   \u66FF\u6362\u5217\u8868:<ruleName>=\u6587\u4EF6\u540D").addText((text) => text.setPlaceholder("\u7559\u7A7A\u5C06\u521B\u5EFA\u7A7A\u6587\u4EF6.").setValue(this.plugin.settings.\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84).onChange((value) => __async(this, null, function* () {
      console.log("Secret: " + value);
      this.plugin.settings.\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84 = value;
      yield this.plugin.saveSettings();
    })));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG4vLyBSZW1lbWJlciB0byByZW5hbWUgdGhlc2UgY2xhc3NlcyBhbmQgaW50ZXJmYWNlcyFcclxuLy9cdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0YsXHU1NkUwXHU0RTNBXHU0RTBEXHU3N0U1XHU5MDUzXHU1NDhCXHU1M0Q2c2V0dGluZ1x1NTAzQyxcdTUzRUFcdTU5N0RcdThGQzJcdTU2REVcdTRFMDBcdTRFMEIuXHJcblxyXG52YXIgbXBsdWdpbjpNeVBsdWdpbjtcclxuXHJcbmludGVyZmFjZSBNeVBsdWdpblNldHRpbmdzIHtcclxuXHRcdTY1QjBcdTY1ODdcdTY4NjNcdTY4MzlcdTc2RUVcdTVGNTU6IHN0cmluZztcclxuXHRcdTZBMjFcdTY3N0ZcdTY1ODdcdTRFRjZcdThERUZcdTVGODQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogTXlQbHVnaW5TZXR0aW5ncyA9IHtcclxuXHRcdTY1QjBcdTY1ODdcdTY4NjNcdTY4MzlcdTc2RUVcdTVGNTU6ICcnLFxyXG5cdFx1NkEyMVx1Njc3Rlx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NDogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG5cdHNldHRpbmdzOiBNeVBsdWdpblNldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cdFx0bXBsdWdpbj10aGlzO1xyXG5cdFx0Ly8gVGhpcyBjcmVhdGVzIGFuIGljb24gaW4gdGhlIGxlZnQgcmliYm9uLlxyXG5cdFx0Y29uc3QgcmliYm9uSWNvbkVsID0gdGhpcy5hZGRSaWJib25JY29uKCdwYW5lLWxheW91dCcsICdcdTg5QzRcdTUyMTlcdTY1ODdcdTRFRjZcdTU5MzlcdTZBMjFcdTY3N0YnLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcblx0XHRcdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgaWNvbi5cclxuXHRcdFx0Ly8gbmV3IE5vdGljZSgnVGhpcyBpcyBhIG5vdGljZSEnKTtcclxuXHRcdFx0bmV3IFx1ODlDNFx1NTIxOTFcdTZBMjFcdTYwMDFcdTY4NDYodGhpcy5hcHApLm9wZW4oKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gUGVyZm9ybSBhZGRpdGlvbmFsIHRoaW5ncyB3aXRoIHRoZSByaWJib25cclxuXHRcdHJpYmJvbkljb25FbC5hZGRDbGFzcygnbXktcGx1Z2luLXJpYmJvbi1jbGFzcycpO1xyXG5cclxuXHRcdC8vIC8vIFRoaXMgYWRkcyBhIHN0YXR1cyBiYXIgaXRlbSB0byB0aGUgYm90dG9tIG9mIHRoZSBhcHAuIERvZXMgbm90IHdvcmsgb24gbW9iaWxlIGFwcHMuXHJcblx0XHQvLyBjb25zdCBzdGF0dXNCYXJJdGVtRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcclxuXHRcdC8vIHN0YXR1c0Jhckl0ZW1FbC5zZXRUZXh0KCdTdGF0dXMgQmFyIFRleHQnKTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzaW1wbGUgY29tbWFuZCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYW55d2hlcmVcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnb3Blbi1tb250aC1ydWxlLWNyZWF0ZS1mb2xkJyxcclxuXHRcdFx0bmFtZTogJ1x1NjcwOFx1NEVGRFx1ODlDNFx1NTIxOScsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bmV3IFx1ODlDNFx1NTIxOTFcdTZBMjFcdTYwMDFcdTY4NDYodGhpcy5hcHApLm9wZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyBUaGlzIGFkZHMgYW4gZWRpdG9yIGNvbW1hbmQgdGhhdCBjYW4gcGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvbiB0aGUgY3VycmVudCBlZGl0b3IgaW5zdGFuY2VcclxuXHRcdC8vIHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHQvLyBcdGlkOiAnc2FtcGxlLWVkaXRvci1jb21tYW5kJyxcclxuXHRcdC8vIFx0bmFtZTogJ1NhbXBsZSBlZGl0b3IgY29tbWFuZCcsXHJcblx0XHQvLyBcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xyXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGVkaXRvci5nZXRTZWxlY3Rpb24oKSk7XHJcblx0XHQvLyBcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oJ1NhbXBsZSBFZGl0b3IgQ29tbWFuZCcpO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIFRoaXMgYWRkcyBhIGNvbXBsZXggY29tbWFuZCB0aGF0IGNhbiBjaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBhcHAgYWxsb3dzIGV4ZWN1dGlvbiBvZiB0aGUgY29tbWFuZFxyXG5cdFx0Ly8gdGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdC8vIFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1jb21wbGV4JyxcclxuXHRcdC8vIFx0bmFtZTogJ09wZW4gc2FtcGxlIG1vZGFsIChjb21wbGV4KScsXHJcblx0XHQvLyBcdGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xyXG5cdFx0Ly8gXHRcdC8vIENvbmRpdGlvbnMgdG8gY2hlY2tcclxuXHRcdC8vIFx0XHRjb25zdCBtYXJrZG93blZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG5cdFx0Ly8gXHRcdGlmIChtYXJrZG93blZpZXcpIHtcclxuXHRcdC8vIFx0XHRcdC8vIElmIGNoZWNraW5nIGlzIHRydWUsIHdlJ3JlIHNpbXBseSBcImNoZWNraW5nXCIgaWYgdGhlIGNvbW1hbmQgY2FuIGJlIHJ1bi5cclxuXHRcdC8vIFx0XHRcdC8vIElmIGNoZWNraW5nIGlzIGZhbHNlLCB0aGVuIHdlIHdhbnQgdG8gYWN0dWFsbHkgcGVyZm9ybSB0aGUgb3BlcmF0aW9uLlxyXG5cdFx0Ly8gXHRcdFx0aWYgKCFjaGVja2luZykge1xyXG5cdFx0Ly8gXHRcdFx0XHRuZXcgU2FtcGxlTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcclxuXHRcdC8vIFx0XHRcdH1cclxuXHJcblx0XHQvLyBcdFx0XHQvLyBUaGlzIGNvbW1hbmQgd2lsbCBvbmx5IHNob3cgdXAgaW4gQ29tbWFuZCBQYWxldHRlIHdoZW4gdGhlIGNoZWNrIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZVxyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzZXR0aW5ncyB0YWIgc28gdGhlIHVzZXIgY2FuIGNvbmZpZ3VyZSB2YXJpb3VzIGFzcGVjdHMgb2YgdGhlIHBsdWdpblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTYW1wbGVTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcclxuXHRcdC8vIFVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGlzIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdC8vIHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG5cdFx0Ly8gXHQvL2NvbnNvbGUubG9nKCdjbGljaycsIGV2dCk7XHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHQvLyBXaGVuIHJlZ2lzdGVyaW5nIGludGVydmFscywgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdC8vdGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZygnc2V0SW50ZXJ2YWwnKSwgNSAqIDYwICogMTAwMCkpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgXHU4OUM0XHU1MjE5MVx1NkEyMVx1NjAwMVx1Njg0NiBleHRlbmRzIE1vZGFsIHtcclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMuYXBwPWFwcDtcclxuXHR9XHJcblxyXG5cdGFzeW5jIG9uT3BlbigpIHtcclxuXHRcdGNvbnN0IHt0aXRsZUVsfSA9dGhpcztcclxuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcclxuXHRcdGNvbnN0IG15dGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0XHJcblxyXG5cclxuXHJcblx0XHQvL1x1NjgwN1x1OTg5OFx1NjNEMFx1NzkzQVxyXG5cdFx0dGl0bGVFbC5zZXRUZXh0KFwiXHU4QkY3XHU4RjkzXHU1MTY1XHU2NTg3XHU0RUY2XHU1NDBEXCIpXHJcblx0XHQvL1x1NzU0Q1x1OTc2MlxyXG5cdFx0Y29uc3QgY29udHJvbEVsID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnKTtcclxuXHRcdGNvbnRyb2xFbC5zdHlsZS5jc3NUZXh0PSd3aWR0aDozMDBweDtoZWlnaHQ6NDBweDttYXJnaW46MCBhdXRvOyc7XHJcblx0XHQvL1x1OEY5M1x1NTE2NVx1Njg0NlxyXG5cdFx0Y29uc3QgaW5wdXQgPSBjb250cm9sRWwuY3JlYXRlRWwoJ2lucHV0Jyk7XHJcblx0XHRpbnB1dC5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjMwMHB4O2hlaWdodDo0MHB4O21hcmdpbjowIGF1dG87Zm9udC1zaXplOjIycHg7JztcclxuXHRcdGlucHV0LmZvY3VzKCk7XHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGtleWRvd24pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGtleWRvd24oZXZlbnQ6IGFueSl7XHJcblx0XHRcdGlmKGV2ZW50LmtleUNvZGUgPT0gMTMpe1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJcdTYzMDlcdTRFODZcdTU2REVcdThGNjYsXHU2MjY3XHU4ODRDIVwiKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGlucHV0LnZhbHVlKTtcclxuXHRcdFx0XHRcdTYyNjdcdTg4NENcdTUxRkRcdTY1NzAoaW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdG15dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRhc3luYyBmdW5jdGlvbiBcdTYyNjdcdTg4NENcdTUxRkRcdTY1NzAoXHU4RjkzXHU1MTY1XHU2NTg3XHU0RUY2XHU1NDBEOnN0cmluZyl7XHJcblxyXG5cdFx0XHQgaWYoXHU4RjkzXHU1MTY1XHU2NTg3XHU0RUY2XHU1NDBEPT0gbnVsbCl7cmV0dXJuIFwiXCJ9XHJcblx0XHRcdCB2YXIgXHU2MzA3XHU1QjlBXHU4REVGXHU1Rjg0ID0gbXBsdWdpbi5zZXR0aW5ncy5cdTY1QjBcdTY1ODdcdTY4NjNcdTY4MzlcdTc2RUVcdTVGNTU7XHJcblx0XHRcdCB2YXIgXHU2NTg3XHU2ODYzXHU2QTIxXHU2NzdGID1tcGx1Z2luLnNldHRpbmdzLlx1NkEyMVx1Njc3Rlx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NDtcclxuXHRcdFx0XHJcblx0XHRcdCB2YXIgXHU1Rjg1XHU1OTBEXHU1MjM2XHU2NTg3XHU2NzJDID0gYXdhaXQgXHU1MjFCXHU1RUZBXHU2NTg3XHU2ODYzKFx1NjMwN1x1NUI5QVx1OERFRlx1NUY4NCxcdTY1ODdcdTY4NjNcdTZBMjFcdTY3N0YpOyBcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvLyAgY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXHJcblx0XHRcdC8vICBjb25zdCBjbGlwYm9hcmQgPSBlbGVjdHJvbi5jbGlwYm9hcmQ7XHJcblx0XHRcdC8vIGNsaXBib2FyZC53cml0ZVRleHQoXHU1Rjg1XHU1OTBEXHU1MjM2XHU2NTg3XHU2NzJDKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJcdTVGODVcdTU5MERcdTUyMzZcdTY1ODdcdTY3MkNcIitcdTVGODVcdTU5MERcdTUyMzZcdTY1ODdcdTY3MkMpO1xyXG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcdTVGODVcdTU5MERcdTUyMzZcdTY1ODdcdTY3MkMpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gXHU2ODNDXHU1RjBGXHU1MzE2XHU2NUY2XHU5NUY0KGRhdGU6RGF0ZSl7XHJcblx0XHRcdFx0dmFyIFx1NjJGQ1x1NjNBNSA9XCJcIjtcclxuXHRcdFx0XHR2YXIgXHU2NUU1XHU2NzFGID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0XHRcdFx0dmFyIFx1NjcwOCA9IGRhdGUuZ2V0VVRDTW9udGgoKSsxO1xyXG5cdFx0XHRcdHZhciBcdTVFNzQgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0XHU2MkZDXHU2M0E1ID0gXCItXCIgKyBcdTVFNzQrXCItXCIrXHU2NzA4K1wiLVwiK1x1NjVFNVx1NjcxRlxyXG5cdFx0XHRcdHJldHVybiBcdTYyRkNcdTYzQTVcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXN5bmMgZnVuY3Rpb24gXHU1MjFCXHU1RUZBXHU2NTg3XHU2ODYzKFx1NjMwN1x1NUI5QVx1OERFRlx1NUY4NDogc3RyaW5nLFx1NjMwN1x1NUI5QVx1NjU4N1x1Njg2M1x1NkEyMVx1Njc3Rjogc3RyaW5nKSB7XHJcblx0XHRcclxuXHRcdFx0XHQvL1x1OEZEOVx1NEUwMFx1OTBFOFx1NTIwNlx1NTIxQlx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVxyXG5cdFx0XHRcdHZhciBkYXRlID0gbmV3IERhdGU7XHJcblx0XHRcdFx0dmFyIHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0dmFyIFx1NUU3NFx1OERFRlx1NUY4ND1cIlxcXFxcIit5O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBtID0gZGF0ZS5nZXRNb250aCgpKzE7XHJcblx0XHRcdFx0dmFyIFx1NjcwOFx1OERFRlx1NUY4ND1cIlxcXFxcIittO1xyXG5cdFx0XHRcdHZhciBcdTUxNjhcdThERUZcdTVGODQ9XHU2MzA3XHU1QjlBXHU4REVGXHU1Rjg0K1x1NUU3NFx1OERFRlx1NUY4NCtcdTY3MDhcdThERUZcdTVGODQ7XHJcblx0XHRcdFx0bXl0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoXHU1MTY4XHU4REVGXHU1Rjg0KTsvL1x1OEZEOVx1NEUwMFx1ODg0Q1x1NTIxQlx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vXHU4RkQ5XHU0RTAwXHU5MEU4XHU1MjA2XHU1MjFCXHU1RUZBXHU2NTg3XHU2ODYzXHJcblx0XHRcdFx0XHJcblx0XHRcclxuXHJcblx0XHRcdFx0bGV0IGRhdGUyID0gbmV3IERhdGUoKVxyXG5cdFx0XHRcdHZhciBcdTY1RjZcdTk1RjRcdTU0MEVcdTdGMDAgPSBcdTY4M0NcdTVGMEZcdTUzMTZcdTY1RjZcdTk1RjQoZGF0ZTIpO1xyXG5cdFx0XHRcdHZhciBcdTUyMUJcdTVFRkFcdTY1ODdcdTRFRjZcdTU0MEQgPSBcdTUxNjhcdThERUZcdTVGODQgKyBcIlxcXFxcIiArIFx1OEY5M1x1NTE2NVx1NjU4N1x1NEVGNlx1NTQwRCArIFx1NjVGNlx1OTVGNFx1NTQwRVx1N0YwMCArIFwiLm1kXCI7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9cdThGRDlcdTkxQ0NcdTY1ODdcdTY4NjNcdTUxODVcdTVCQjksXHU1M0VGXHU4MEZEXHU2NjJGXHU3QTdBXHU3Njg0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIFx1NjU4N1x1Njg2M1x1NTE4NVx1NUJCOSA9IGF3YWl0IG15dGhpcy5hcHAudmF1bHQucmVhZChteXRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChcdTY1ODdcdTY4NjNcdTZBMjFcdTY3N0YpKTtcclxuXHRcdFx0XHRcdTY1ODdcdTY4NjNcdTUxODVcdTVCQjk9XHU2NkZGXHU2MzYyXHU1MTg1XHU1QkI5KFx1NjU4N1x1Njg2M1x1NTE4NVx1NUJCOSk7XHJcblx0XHRcdFx0bXl0aGlzLmFwcC52YXVsdC5jcmVhdGUoXHU1MjFCXHU1RUZBXHU2NTg3XHU0RUY2XHU1NDBELFx1NjU4N1x1Njg2M1x1NTE4NVx1NUJCOSk7XHJcblx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgXHU1Rjg1XHU1OTBEXHU1MjM2XHU2NTg3XHU2NzJDID1cIltbXCIrXHU4RjkzXHU1MTY1XHU2NTg3XHU0RUY2XHU1NDBEICsgXHU2NUY2XHU5NUY0XHU1NDBFXHU3RjAwICsgXCJ8XCIgKyBcdThGOTNcdTUxNjVcdTY1ODdcdTRFRjZcdTU0MEQgK1wiXV1cIjtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gXHU1Rjg1XHU1OTBEXHU1MjM2XHU2NTg3XHU2NzJDO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZ1bmN0aW9uIFx1NjZGRlx1NjM2Mlx1NTE4NVx1NUJCOShcdTUzOUZcdTY1ODdcdTY3MkM6c3RyaW5nKXtcclxuXHRcdFx0XHR2YXIgXHU2NUIwXHU1MTg1XHU1QkI5PVx1NTM5Rlx1NjU4N1x1NjcyQy5yZXBsYWNlKCclcnVsZU5hbWUlJyxcdThGOTNcdTUxNjVcdTY1ODdcdTRFRjZcdTU0MEQpO1xyXG5cdFx0XHRcdHJldHVybiBcdTY1QjBcdTUxODVcdTVCQjk7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uQ2xvc2UoKSB7XHJcblx0XHRjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XHJcblx0XHRjb250ZW50RWwuZW1wdHkoKTtcclxuXHR9XHJcblxyXG5cdFxyXG59XHJcblxyXG5jbGFzcyBTYW1wbGVTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBNeVBsdWdpbjtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTXlQbHVnaW4pIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHtjb250YWluZXJFbH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywge3RleHQ6ICdcdTg5QzRcdTUyMTlcdTY1ODdcdTRFRjZcdTU5MzlcdTZBMjFcdTY3N0YnfSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdcdTY1QjBcdTY1ODdcdTY4NjNcdTY4MzlcdTc2RUVcdTVGNTUnKVxyXG5cdFx0XHQuc2V0RGVzYygnXHU0RTNFXHU0RjhCMTpcdTk4NzlcdTc2RUUgICAgXHU0RTNFXHU0RjhCMjpcdTk4NzlcdTc2RUUvXHU1QjUwXHU2NTg3XHU0RUY2XHU1OTM5JylcclxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdcdTc1NTlcdTdBN0FcdTVDMDZcdTUyMUJcdTVFRkFcdTU3MjhcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEIuJylcclxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuXHU2NUIwXHU2NTg3XHU2ODYzXHU2ODM5XHU3NkVFXHU1RjU1KVxyXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTZWNyZXQ6ICcgKyB2YWx1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5cdTY1QjBcdTY1ODdcdTY4NjNcdTY4MzlcdTc2RUVcdTVGNTUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHQuc2V0TmFtZSgnXHU2QTIxXHU2NzdGXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0JylcclxuXHRcdC5zZXREZXNjKCdcdTRFM0VcdTRGOEIxOlx1NkEyMVx1Njc3Ri9cdTZBMjFcdTY3N0ZcdTY1ODdcdTRFRjYxLm1kICAgXHU2NkZGXHU2MzYyXHU1MjE3XHU4ODY4OjxydWxlTmFtZT49XHU2NTg3XHU0RUY2XHU1NDBEJylcclxuXHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxyXG5cdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ1x1NzU1OVx1N0E3QVx1NUMwNlx1NTIxQlx1NUVGQVx1N0E3QVx1NjU4N1x1NEVGNi4nKVxyXG5cdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuXHU2QTIxXHU2NzdGXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0KVxyXG5cdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlY3JldDogJyArIHZhbHVlKTtcclxuXHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5cdTZBMjFcdTY3N0ZcdTY1ODdcdTRFRjZcdThERUZcdTVGODQgPSB2YWx1ZTtcclxuXHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0fSkpO1xyXG5cdH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE0RjtBQUk1RixJQUFJO0FBT0osSUFBTSxtQkFBcUM7QUFBQSxFQUMxQyxzQ0FBUTtBQUFBLEVBQ1Isc0NBQVE7QUFBQTtBQUdULDZCQUFzQyx1QkFBTztBQUFBLEVBR3RDLFNBQVM7QUFBQTtBQUNkLFlBQU0sS0FBSztBQUNYLGdCQUFRO0FBRVIsWUFBTSxlQUFlLEtBQUssY0FBYyxlQUFlLDhDQUFXLENBQUMsUUFBb0I7QUFHdEYsWUFBSSxnQ0FBTyxLQUFLLEtBQUs7QUFBQTtBQUd0QixtQkFBYSxTQUFTO0FBT3RCLFdBQUssV0FBVztBQUFBLFFBQ2YsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sVUFBVSxNQUFNO0FBQ2YsY0FBSSxnQ0FBTyxLQUFLLEtBQUs7QUFBQTtBQUFBO0FBaUN2QixXQUFLLGNBQWMsSUFBSSxpQkFBaUIsS0FBSyxLQUFLO0FBQUE7QUFBQTtBQUFBLEVBWW5ELFdBQVc7QUFBQTtBQUFBLEVBSUwsZUFBZTtBQUFBO0FBQ3BCLFdBQUssV0FBVyxPQUFPLE9BQU8sSUFBSSxrQkFBa0IsTUFBTSxLQUFLO0FBQUE7QUFBQTtBQUFBLEVBRzFELGVBQWU7QUFBQTtBQUNwQixZQUFNLEtBQUssU0FBUyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBSTNCLG9EQUFxQixzQkFBTTtBQUFBLEVBQzFCLFlBQVksS0FBVTtBQUNyQixVQUFNO0FBQ04sU0FBSyxNQUFJO0FBQUE7QUFBQSxFQUdKLFNBQVM7QUFBQTtBQUNk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
