import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
// Remember to rename these classes and interfaces!
//全局变量,因为不知道咋取setting值,只好迂回一下.

var mplugin:MyPlugin;

interface MyPluginSettings {
	新文档根目录: string;
	模板文件路径: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	新文档根目录: '',
	模板文件路径: ''
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();
		mplugin=this;
		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('pane-layout', '规则文件夹模板', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			// new Notice('This is a notice!');
			new 规则1模态框(this.app).open();
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');

		// // This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		// const statusBarItemEl = this.addStatusBarItem();
		// statusBarItemEl.setText('Status Bar Text');

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-month-rule-create-fold',
			name: '月份规则',
			callback: () => {
				new 规则1模态框(this.app).open();
			}
		});
		// This adds an editor command that can perform some operation on the current editor instance
		// this.addCommand({
		// 	id: 'sample-editor-command',
		// 	name: 'Sample editor command',
		// 	editorCallback: (editor: Editor, view: MarkdownView) => {
		// 		console.log(editor.getSelection());
		// 		editor.replaceSelection('Sample Editor Command');
		// 	}
		// });
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		// this.addCommand({
		// 	id: 'open-sample-modal-complex',
		// 	name: 'Open sample modal (complex)',
		// 	checkCallback: (checking: boolean) => {
		// 		// Conditions to check
		// 		const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
		// 		if (markdownView) {
		// 			// If checking is true, we're simply "checking" if the command can be run.
		// 			// If checking is false, then we want to actually perform the operation.
		// 			if (!checking) {
		// 				new SampleModal(this.app).open();
		// 			}

		// 			// This command will only show up in Command Palette when the check function returns true
		// 			return true;
		// 		}
		// 	}
		// });

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	//console.log('click', evt);
		// });

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		//this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class 规则1模态框 extends Modal {
	constructor(app: App) {
		super(app);
		this.app=app;
	}

	async onOpen() {
		const {titleEl} =this;
		const {contentEl} = this;
		const mythis = this;

		



		//标题提示
		titleEl.setText("请输入文件名")
		//界面
		const controlEl = contentEl.createEl('div');
		controlEl.style.cssText='width:300px;height:40px;margin:0 auto;';
		//输入框
		const input = controlEl.createEl('input');
		input.style.cssText = 'width:300px;height:40px;margin:0 auto;font-size:22px;';
		input.focus();
		input.addEventListener("keydown",keydown);

		function keydown(event: any){
			if(event.keyCode == 13){
				//console.log("按了回车,执行!");
				//console.log(input.value);
				执行函数(input.value);
				mythis.close();
			}
			
		}
		
		async function 执行函数(输入文件名:string){

			 if(输入文件名== null){return ""}
			 var 指定路径 = mplugin.settings.新文档根目录;
			 var 文档模板 =mplugin.settings.模板文件路径;
			
			 var 待复制文本 = await 创建文档(指定路径,文档模板); 
			

			//  const electron = require('electron')
			//  const clipboard = electron.clipboard;
			// clipboard.writeText(待复制文本);
			console.log("待复制文本"+待复制文本);
			navigator.clipboard.writeText(待复制文本);

			function 格式化时间(date:Date){
				var 拼接 ="";
				var 日期 = date.getDate();
				var 月 = date.getUTCMonth()+1;
				var 年 = date.getFullYear();
				拼接 = "-" + 年+"-"+月+"-"+日期
				return 拼接
			}

			async function 创建文档(指定路径: string,指定文档模板: string) {
		
				//这一部分创建文件夹
				var date = new Date;
				var y = date.getFullYear();
				var 年路径="\\"+y;
				
				var m = date.getMonth()+1;
				var 月路径="\\"+m;
				var 全路径=指定路径+年路径+月路径;
				mythis.app.vault.createFolder(全路径);//这一行创建文件夹
				
				//这一部分创建文档
				
		

				let date2 = new Date()
				var 时间后缀 = 格式化时间(date2);
				var 创建文件名 = 全路径 + "\\" + 输入文件名 + 时间后缀 + ".md";
				

				var 文档内容 = await mythis.app.vault.read(mythis.app.vault.getAbstractFileByPath(文档模板));
				文档内容=替换内容(文档内容);
				mythis.app.vault.create(创建文件名,文档内容);
		
				
				var 待复制文本 ="[["+输入文件名 + 时间后缀 + "|" + 输入文件名 +"]]";
				
				return 待复制文本;
			}
			function 替换内容(原文本:string){
				var 新内容=原文本.replace('%ruleName%',输入文件名);
				return 新内容;
			}
		

		}
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}

	
}

class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: '规则文件夹模板'});

		new Setting(containerEl)
			.setName('新文档根目录')
			.setDesc('举例1:项目    举例2:项目/子文件夹')
			.addText(text => text
				.setPlaceholder('留空将创建在根目录下.')
				.setValue(this.plugin.settings.新文档根目录)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.新文档根目录 = value;
					await this.plugin.saveSettings();
				}));


		new Setting(containerEl)
		.setName('模板文件路径')
		.setDesc('举例1:模板/模板文件1.md   替换列表:<ruleName>=文件名')
		.addText(text => text
			.setPlaceholder('留空将创建空文件.')
			.setValue(this.plugin.settings.模板文件路径)
			.onChange(async (value) => {
				console.log('Secret: ' + value);
				this.plugin.settings.模板文件路径 = value;
				await this.plugin.saveSettings();
			}));
	}
}
