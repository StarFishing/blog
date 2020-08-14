(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{358:function(e,v,t){"use strict";t.r(v);var _=t(39),a=Object(_.a)({},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"谈论分支策略和发布管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈论分支策略和发布管理","aria-hidden":"true"}},[e._v("#")]),e._v(" 谈论分支策略和发布管理")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://nvie.com/img/git-model@2x.png",alt:"img"}})]),e._v(" "),t("h2",{attrs:{id:"为什么是git？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么是git？","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么是git？")]),e._v(" "),t("p",[e._v("有关Git与集中式源代码控制系统相比的优缺点的详尽讨论，请参见 "),t("a",{attrs:{href:"http://git.or.cz/gitwiki/GitSvnComparsion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web"),t("OutboundLink")],1),e._v("。那里发生了许多火焰大战。作为开发人员，我比今天其他所有工具都更喜欢Git。Git确实改变了开发人员对合并和分支的看法。在我来自经典的CVS / Subversion的世界中，合并/分支一直被认为有点吓人（“当心合并冲突，它们会咬你！”），而您却偶尔会做一次。")]),e._v(" "),t("p",[e._v("但是使用Git，这些操作非常便宜且简单，实际上，它们被视为"),t("em",[e._v("日常")]),e._v("工作流程的核心部分之一。例如，在CVS / Subversion "),t("a",{attrs:{href:"http://svnbook.red-bean.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("书籍中"),t("OutboundLink")],1),e._v("，分支和合并首先在后面的章节中（针对高级用户）进行讨论，而在 "),t("a",{attrs:{href:"http://book.git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("每本"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"http://pragprog.com/titles/tsgit/pragmatic-version-control-using-git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git "),t("OutboundLink")],1),t("a",{attrs:{href:"http://github.com/progit/progit",target:"_blank",rel:"noopener noreferrer"}},[e._v("书籍中"),t("OutboundLink")],1),e._v("，它都已经在第3章（基础知识）中进行了讨论。")]),e._v(" "),t("p",[e._v("由于其简单性和重复性，分支和合并不再是令人害怕的事情。应该使用版本控制工具来帮助分支/合并。")]),e._v(" "),t("p",[e._v("足够了解这些工具，让我们进入开发模型。我将在此处介绍的模型本质上不过是每个团队成员必须遵循的一组程序才能进入托管软件开发过程。")]),e._v(" "),t("h2",{attrs:{id:"分散但集中化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分散但集中化","aria-hidden":"true"}},[e._v("#")]),e._v(" 分散但集中化")]),e._v(" "),t("p",[e._v("我们使用的存储库设置与该分支模型一起很好地使用，它是一个中央“真实”存储库。请注意，此回购协议仅"),t("em",[e._v("被视为")]),e._v(" 中央回购协议 （由于Git是DVCS，因此在技术层面上没有中央回购协议）。我们将此仓库称为"),t("code",[e._v("origin")]),e._v("，因为所有Git用户都熟悉该名称。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://nvie.com/img/centr-decentr@2x.png",alt:"img"}})]),e._v(" "),t("p",[e._v("每个开发人员都拉起并推到原点。但是，除了集中的推拉关系之外，每个开发人员还可以从其他同伴那里拉出变更以组成子团队。例如，在"),t("code",[e._v("origin")]),e._v("过早地将进行中的工作之前，与两个或多个开发人员一起使用一项重大的新功能可能很有用 。在上图中，有Alice和Bob，Alice和David以及Clair和David的子团队。")]),e._v(" "),t("p",[e._v("从技术上讲，这仅意味着Alice定义了一个Git远程服务器，名为"),t("code",[e._v("bob")]),e._v("，指向Bob的存储库，反之亦然。")]),e._v(" "),t("h2",{attrs:{id:"主要分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要分支")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://nvie.com/img/main-branches@2x.png",alt:"img"}})]),e._v(" "),t("p",[e._v("从根本上说，开发模型的灵感来自那里的现有模型。中央存储库包含两个主要分支，生命周期无限：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("master")])]),e._v(" "),t("li",[t("code",[e._v("develop")])])]),e._v(" "),t("p",[e._v("每个Git用户都应该熟悉"),t("code",[e._v("master")]),e._v("at 的分支"),t("code",[e._v("origin")]),e._v("。与"),t("code",[e._v("master")]),e._v("分支平行，存在另一个分支，称为"),t("code",[e._v("develop")]),e._v("。")]),e._v(" "),t("p",[e._v("我们认为"),t("code",[e._v("origin/master")]),e._v("它是源代码"),t("code",[e._v("HEAD")]),e._v("始终反映"),t("em",[e._v("生产就绪")]),e._v("状态的主要分支 。")]),e._v(" "),t("p",[e._v("我们认为"),t("code",[e._v("origin/develop")]),e._v("这是主要分支，在该分支中的源代码 "),t("code",[e._v("HEAD")]),e._v("始终反映状态以及下一版本的最新交付开发更改。有人将其称为“整合分支”。这是构建任何夜间自动构建的地方。")]),e._v(" "),t("p",[e._v("当"),t("code",[e._v("develop")]),e._v("分支中的源代码达到稳定点并准备发布时，所有更改都应以"),t("code",[e._v("master")]),e._v(" 某种方式合并回去，然后用发布号进行标记。如何进一步详细地进行讨论。")]),e._v(" "),t("p",[e._v("因此，每次将更改合并回时"),t("code",[e._v("master")]),e._v("，"),t("em",[e._v("根据定义")]),e._v("，这是一个新的生产版本。我们通常对此非常严格，因此从理论上讲，每次提交时，我们都可以使用Git钩子脚本自动将软件构建和推出到生产服务器 "),t("code",[e._v("master")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"支持分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 支持分支")]),e._v(" "),t("p",[e._v("在主要分支"),t("code",[e._v("master")]),e._v("和旁边"),t("code",[e._v("develop")]),e._v("，我们的开发模型使用各种支持分支来协助团队成员之间的并行开发，简化功能跟踪，为生产发布做准备并协助快速解决生产中的实际问题。与主要分支不同，这些分支的生命周期总是有限的，因为它们最终将被删除。")]),e._v(" "),t("p",[e._v("我们可以使用的不同类型的分支机构是：")]),e._v(" "),t("ul",[t("li",[e._v("功能分支")]),e._v(" "),t("li",[e._v("发布分支")]),e._v(" "),t("li",[e._v("修补程序分支")])]),e._v(" "),t("p",[e._v("这些分支中的每一个都有特定的目的，并受严格的规则约束，即哪些分支可能是其原始分支，哪些分支必须是其合并目标。我们将在一分钟内逐步解决它们。")]),e._v(" "),t("p",[e._v("从技术的角度来看，这些分支绝不是“特殊的”。分支类型按我们的"),t("em",[e._v("使用方式")]),e._v("进行分类。它们当然是普通的旧Git分支。")]),e._v(" "),t("h3",{attrs:{id:"功能分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 功能分支")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://nvie.com/img/fb@2x.png",alt:"img"}})]),e._v(" "),t("ul",[t("li",[t("p",[e._v("可能从以下分支：")]),e._v(" "),t("p",[t("code",[e._v("develop")])])]),e._v(" "),t("li",[t("p",[e._v("必须合并回：")]),e._v(" "),t("p",[t("code",[e._v("develop")])])]),e._v(" "),t("li",[t("p",[e._v("分支命名约定：")]),e._v(" "),t("p",[e._v("任何东西，除了 "),t("code",[e._v("master")]),e._v("，"),t("code",[e._v("develop")]),e._v("，"),t("code",[e._v("release-*")]),e._v("，或者"),t("code",[e._v("hotfix-*")])])])]),e._v(" "),t("p",[e._v("功能分支（或有时称为主题分支）用于为即将发布或遥远的将来版本开发新功能。当开始开发功能时，此时可能不知道将合并该功能的目标版本。功能分支的本质是只要功能正在开发中就存在，但是最终会合并回去"),t("code",[e._v("develop")]),e._v("（以确保将新功能添加到即将发布的版本中）或丢弃（以防实验失败）。")]),e._v(" "),t("p",[e._v("功能分支通常仅存在于开发人员存储库中，而不存在于中"),t("code",[e._v("origin")]),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"创建一个功能分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个功能分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建一个功能分支")]),e._v(" "),t("p",[e._v("开始使用新功能时，请从"),t("code",[e._v("develop")]),e._v("分支分支。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout -b myfeature开发\n 切换到新分支“ myfeature”\n")])])]),t("h4",{attrs:{id:"在development上包含完成的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在development上包含完成的功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 在development上包含完成的功能")]),e._v(" "),t("p",[e._v("可以将完成的功能合并到"),t("code",[e._v("develop")]),e._v("分支中，以确保将它们添加到即将发布的版本中：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout开发\n 切换到分支'develop' \n$ git merge --no-ff myfeature\n 更新ea1b82a..05e9557 \n（更改摘要）\n$ git branch -d myfeature\n 删除分支myfeature（以前为05e9557）。\n$ git push origin development\n")])])]),t("p",[e._v("该"),t("code",[e._v("--no-ff")]),e._v("标志使合并始终创建一个新的提交对象，即使合并可以通过快进来执行。这样可以避免丢失有关要素分支历史存在的信息，并将所有添加了要素的提交分组在一起。比较：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://nvie.com/img/merge-without-ff@2x.png",alt:"img"}})]),e._v(" "),t("p",[e._v("在后一种情况下，无法从Git历史记录中看到哪些提交对象一起实现了功能—您将不得不手动读取所有日志消息。在后一种情况下，还原整个功能（即一组提交）确实很头疼，而如果使用了"),t("code",[e._v("--no-ff")]),e._v("标志，则很容易做到 。")]),e._v(" "),t("p",[e._v("是的，它将创建更多（空）提交对象，但收益远大于成本。")]),e._v(" "),t("h3",{attrs:{id:"发布分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 发布分支")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("可能从以下分支：")]),e._v(" "),t("p",[t("code",[e._v("develop")])])]),e._v(" "),t("li",[t("p",[e._v("必须合并回：")]),e._v(" "),t("p",[t("code",[e._v("develop")]),e._v(" 和 "),t("code",[e._v("master")])])]),e._v(" "),t("li",[t("p",[e._v("分支命名约定：")]),e._v(" "),t("p",[t("code",[e._v("release-*")])])])]),e._v(" "),t("p",[e._v("发布分支支持新产品版本的准备。他们考虑了i的最后一刻和t的交叉。此外，它们还允许进行较小的错误修复并为发布准备元数据（版本号，构建日期等）。通过在发行分支上完成所有这些工作，该"),t("code",[e._v("develop")]),e._v(" 分支将被清除以接收下一个大型发行版的功能。")]),e._v(" "),t("p",[e._v("从一个新版本分支分支的关键时刻"),t("code",[e._v("develop")]),e._v("是开发（几乎）何时反映了新版本的期望状态。此时至少必须将要构建的发行版的所有目标功能合并到其中 "),t("code",[e._v("develop")]),e._v("。面向将来发行版的所有功能可能都不会—它们必须等到发行分支分支出来之后。")]),e._v(" "),t("p",[e._v("正是在发行分支的开头，为即将发布的发行版本分配了一个版本号，而不是更早的版本号。直到那一刻，该"),t("code",[e._v("develop")]),e._v(" 分支反映了“下一个发行版”的更改，但是尚不清楚该“下一个发行版”最终将变为0.3还是1.0，直到发行分支开始。该决定是在发布分支的开始处做出的，并由项目的版本号增加规则来执行。")]),e._v(" "),t("h4",{attrs:{id:"创建一个发布分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个发布分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建一个发布分支")]),e._v(" "),t("p",[e._v("从"),t("code",[e._v("develop")]),e._v("分支创建发行分支。例如，说版本1.1.5是当前的生产版本，我们即将发布一个大版本。的状态"),t("code",[e._v("develop")]),e._v("准备好了“下一个版本”，我们已经决定，这将成为版本1.2（而不是1.1.6或2.0）。因此，我们分支并给发行分支起一个反映新版本号的名称：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout -b release-1.2开发\n 切换到新的分支“ release-1.2” \n$ ./bump-version.sh 1.2\n 文件已成功修改，版本升至1.2。\n$ git commit -a -m “将版本号加至1.2” \n[release-1.2 74d9424]将版本号加至1.2 \n1个文件已更改，1个插入（+），1个删除（-）\n")])])]),t("p",[e._v("创建新分支并切换到该分支后，我们更改版本号。这里 "),t("code",[e._v("bump-version.sh")]),e._v("是一个虚构的shell脚本，它更改了工作副本中的某些文件以反映新版本。（当然，这可以是手动更改-关键是"),t("em",[e._v("有些")]),e._v("文件会更改。）然后，提交被修改的版本号。")]),e._v(" "),t("p",[e._v("这个新分支可能在那里存在了一段时间，直到可以肯定地发布该版本为止。在此期间，错误修复程序可能会应用于此分支（而不是"),t("code",[e._v("develop")]),e._v("分支）。严格禁止在此处添加大型新功能。它们必须合并到中"),t("code",[e._v("develop")]),e._v("，因此，请等待下一个重要版本。")]),e._v(" "),t("h4",{attrs:{id:"完成发布分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成发布分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 完成发布分支")]),e._v(" "),t("p",[e._v("当发布分支的状态准备好成为真实发布时，需要执行一些操作。首先，将release分支合并到其中 "),t("code",[e._v("master")]),e._v("（因为每次提交"),t("code",[e._v("master")]),e._v("都是"),t("em",[e._v("定义")]),e._v("上的新发行版，请记住）。接下来，"),t("code",[e._v("master")]),e._v("必须标记该提交，以方便将来参考此历史版本。最后，需要将对release分支所做的更改重新合并到中"),t("code",[e._v("develop")]),e._v("，以便将来的发行版也包含这些错误修复。")]),e._v(" "),t("p",[e._v("Git的前两个步骤：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout master\n 切换到分支'master' \n$ git merge --no-ff release-1.2\n 递归合并。\n（更改摘要）\n$ git tag -a 1.2\n")])])]),t("p",[e._v("该版本现已完成，并已标记以供将来参考。")]),e._v(" "),t("blockquote",[t("p",[e._v("**编辑：**您可能还想使用"),t("code",[e._v("-s")]),e._v("或"),t("code",[e._v("-u")]),e._v("标志对您的标签进行加密签名。")])]),e._v(" "),t("p",[e._v("为了保留在release分支中所做的更改，我们需要将这些更改重新合并到中"),t("code",[e._v("develop")]),e._v("。在Git中：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout开发\n 切换到分支'develop' \n$ git merge --no-ff release-1.2\n 递归合并。\n（更改摘要）\n")])])]),t("p",[e._v("此步骤很可能导致合并冲突（可能甚至发生，因为我们已经更改了版本号）。如果是这样，请修复它并提交。")]),e._v(" "),t("p",[e._v("现在我们真的完成了，可以删除发布分支，因为我们不再需要它了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git branch -d release-1.2\n 删除了分支release-1.2（原为ff452fe）。\n")])])]),t("h3",{attrs:{id:"修补程序分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修补程序分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 修补程序分支")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://nvie.com/img/hotfix-branches@2x.png",alt:"img"}})]),e._v(" "),t("ul",[t("li",[t("p",[e._v("可能从以下分支：")]),e._v(" "),t("p",[t("code",[e._v("master")])])]),e._v(" "),t("li",[t("p",[e._v("必须合并回：")]),e._v(" "),t("p",[t("code",[e._v("develop")]),e._v(" 和 "),t("code",[e._v("master")])])]),e._v(" "),t("li",[t("p",[e._v("分支命名约定：")]),e._v(" "),t("p",[t("code",[e._v("hotfix-*")])])])]),e._v(" "),t("p",[e._v("修补程序分支与发布分支非常相似，尽管它们是计划外的，但它们也旨在为新的生产版本做准备。它们源于必须对不期望的实时生产版本立即采取行动。当必须立即解决生产版本中的严重错误时，可以从标记生产版本的master分支上的相应标记中分支出一个修补程序分支。")]),e._v(" "),t("p",[e._v("本质是团队成员（"),t("code",[e._v("develop")]),e._v("分支机构）的工作可以继续，而另一个人正在准备快速的生产修复。")]),e._v(" "),t("h4",{attrs:{id:"创建hotfix分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建hotfix分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建hotfix分支")]),e._v(" "),t("p",[e._v("修补程序分支是从"),t("code",[e._v("master")]),e._v("分支创建的 。例如，说1.2版是当前生产版本，正在运行，并且由于严重的错误而引起麻烦。但是变化"),t("code",[e._v("develop")]),e._v("仍然不稳定。然后，我们可能会分支出一个修补程序分支并开始解决问题：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout -b hotfix-1.2.1 master\n 切换到新分支“ hotfix-1.2.1” \n$ ./bump-version.sh 1.2.1\n 文件修改成功，版本升至1.2.1。\n$ git commit -a -m “将版本号加至1.2.1” \n[hotfix-1.2.1 41e61bb]将版本号加至1.2.1 \n更改了1个文件，1个插入（+），1个删除（-）\n")])])]),t("p",[e._v("别忘了在分支后增加版本号！")]),e._v(" "),t("p",[e._v("然后，修复该错误并在一个或多个单独的提交中提交此修复程序。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git commit -m “修复了严重的生产问题” \n[hotfix-1.2.1 abbe5d6]修复了严重的生产问题\n5个文件更改，32个插入（+），17个删除（-）\n")])])]),t("h4",{attrs:{id:"完成修补程序分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成修补程序分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 完成修补程序分支")]),e._v(" "),t("p",[e._v("完成后，该bugfix需要合并回"),t("code",[e._v("master")]),e._v("，但也需要合并回"),t("code",[e._v("develop")]),e._v("，以确保该bugfix也包含在下一发行版中。这与释放分支的完成方式完全相似。")]),e._v(" "),t("p",[e._v("首先，更新"),t("code",[e._v("master")]),e._v("并标记发布。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout master\n 切换到分支'master' \n$ git merge --no-ff hotfix-1.2.1\n 递归合并。\n（更改摘要）\n$ git tag -a 1.2.1\n")])])]),t("blockquote",[t("p",[e._v("**编辑：**您可能还想使用"),t("code",[e._v("-s")]),e._v("或"),t("code",[e._v("-u")]),e._v("标志对您的标签进行加密签名。")])]),e._v(" "),t("p",[e._v("接下来，在"),t("code",[e._v("develop")]),e._v("中也包含错误修正：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout开发\n 切换到分支'develop' \n$ git merge --no-ff hotfix-1.2.1\n 递归合并。\n（更改摘要）\n")])])]),t("p",[e._v("该规则的一个例外是， "),t("strong",[e._v("当当前存在发行分支时，需要将修补程序更改而不是合并到该发行分支中"),t("code",[e._v("develop")])]),e._v("。在发行分支完成后，将错误修正回合并到发行分支中，最终会导致将修正修正也合并到"),t("code",[e._v("develop")]),e._v("发行分支中。（如果"),t("code",[e._v("develop")]),e._v("立即进行工作需要此错误修正，并且不能等待发行分支完成，则也可以安全地将错误修正合并到"),t("code",[e._v("develop")]),e._v("现在。）")]),e._v(" "),t("p",[e._v("最后，删除临时分支：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git branch -d hotfix-1.2.1\n 删除了分支hotfix-1.2.1（以前是abbe5d6）。\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("尽管此分支模型没有什么真正令人震惊的新东西，但本文开头的“全局”图在我们的项目中被证明非常有用。它形成了一个易于理解的优雅思维模型，并使团队成员可以对分支和发布过程形成共识。")]),e._v(" "),t("p",[e._v("此处提供了该图的高质量PDF版本。随时将其挂在墙上以随时快速参考。")]),e._v(" "),t("p",[e._v("原文：https://nvie.com/posts/a-successful-git-branching-model/")])])},[],!1,null,null,null);v.default=a.exports}}]);