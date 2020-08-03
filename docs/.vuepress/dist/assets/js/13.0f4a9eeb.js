(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{374:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ossec-host-intrusion-detection-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ossec-host-intrusion-detection-system"}},[e._v("#")]),e._v(" OSSEC Host Intrusion Detection System")]),e._v(" "),a("TagLinks"),e._v(" "),a("p",[e._v("OSSEC is a full platform to monitor and control your systems. It mixes together all the aspects of HIDS (host-based intrusion detection), log monitoring and SIM/SIEM together in a simple, powerful and open source solution.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ossec.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSSEC website"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/ossec/ossec-hids",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Setup and configuration has been tested on following OS with version:")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu- 16.04, 18.04, 20.04")]),e._v(" "),a("li",[e._v("2.9.0 -> 3.6.0")])]),e._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration files")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/featzor/docs/blob/master/conf/ossec/ossec.conf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ossec.conf"),a("OutboundLink")],1),e._v(" (server)")]),e._v(" "),a("li",[e._v("ossec.conf (agent)")])]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("build-essential")])]),e._v(" "),a("li",[a("code",[e._v("libssl-dev")])]),e._v(" "),a("li",[a("code",[e._v("libpcre2-dev")])]),e._v(" "),a("li",[a("code",[e._v("zlib1g-dev")])]),e._v(" "),a("li",[a("code",[e._v("inotify-tools")]),e._v(" (optional)")]),e._v(" "),a("li",[a("code",[e._v("pcre2")]),e._v(" library for version >= 3.3.0 ("),a("a",{attrs:{href:"https://ftp.pcre.org/pub/pcre/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ftp.pcre.org"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"server-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-installation"}},[e._v("#")]),e._v(" Server Installation")]),e._v(" "),a("p",[e._v("Download the "),a("a",{attrs:{href:"https://github.com/ossec/ossec-hids/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest stable version"),a("OutboundLink")],1),e._v(" from ossec-hids GitHub. Extract the file and run the installation script.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz\nfoo@bar:~$ tar -zxvf 3.6.0.tar.gz\nfoo@bar:~$ cd ossec-hids-3.6.0/\nfoo@bar:~$ sudo PCRE2_SYSTEM=yes ./install.sh\n")])])]),a("p",[e._v("If receving build errors make sure that you installed all the required dependencies or check the "),a("a",{attrs:{href:"#troubleshooting"}},[e._v("troubleshooting section")]),e._v(" for details.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz\nfoo@bar:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/\nfoo@bar:~$ sudo apt-get install build-essential libssl-dev libpcre2-dev zlib1g-dev\nfoo@bar:~$ sudo PCRE2_SYSTEM=yes ./install.sh\n")])])]),a("p",[e._v("In this setup we will not use e-mail notifications as we will be using Slack as our notification channel. We wont be adding IPs to our whitelist now but in a later segment. Last we will also skip to enable the syslog port (514 udp).")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[sudo] password for user: (en/br/cn/de/el/es/fr/hu/it/jp/nl/pl/ru/sr/tr) [en]: ENTER\nWhat kind of installation do you want (server, agent, local, hybrid or help)? server\nChoose where to install the OSSEC HIDS [/var/ossec/]: ENTER\nDo you want e-mail notification? (y/n) [y]: n\nDo you want to run the integrity check daemon? (y/n) [y]: y\nDo you want to run the rootkit detection engine? (y/n) [y]: y\nDo you want to enable active response? (y/n) [y]: y\nDo you want to enable the firewall-drop response? (y/n) [y]: y\nDo you want to add more IPs to the white list? (y/n)? [n]: n\nDo you want to enable remote syslog (port 514 udp)? (y/n) [y]: n\n--- Press ENTER to finish (maybe more information below). ---\n")])])]),a("h2",{attrs:{id:"server-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[e._v("#")]),e._v(" Server Configuration")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf\n")])])]),a("p",[e._v("If you are using PSAD make sure to include the PSAD ruleset in the configuration file (as its not defined by default).")]),e._v(" "),a("div",{staticClass:"language-config extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    <include>local_rules.xml</include>\n    <include>psad_rules.xml</include>\n</rules>\n")])])]),a("p",[e._v("Before installing the OSSEC client(s) we need to make some adjustments to our OSSEC server. We will start by editing the configuration file (server) and whitelist the OSSEC clients IP address as well as secure applications communicating with our client(s).")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<global>\n    <white_list>[OSSEC-CLIENT-IP]</white_list>\n</global>\n")])])]),a("p",[e._v("Furthermore, to enable the function to harvest syslog we need to establish that our remote client connection is secure and allow it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<remote>\n    <connection>secure</connection>\n    <allowed-ips>[OSSEC-CLIENT-IP]</allowed-ips>\n</remote>\n")])])]),a("p",[e._v("Next we need to add the client to our OSSEC server and generate a client key. Run the command shown in the code segment below and follow the setup to fit our setup.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo /var/ossec/bin/manage_agents\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("****************************************\n* OSSEC HIDS v3.4.0 Agent Manager.     *\n* The following options are available: *\n****************************************\n    (A)dd an agent (A).  \n    (E)xtract key for an agent (E).\n    (L)ist already added agents (L).\n    (R)emove an agent (R).\n    (Q)quit.\nChoose your action: A,E,L,R or Q: a\n- Adding a new agent (use â€˜\\qâ€™ to return to the main menu).\n    Please provide the following:\n    * A name for the new agent: [CLIENT-SERVER-NAME]\n    * The IP Address of the new agent: [OSSEC-CLIENT-IP]\n    * An ID for the new agent[000]: 001\nAgent information:\n    ID:001\n    Name:[CLIENT-SERVER-NAME]\n    IP Address:[OSSEC-CLIENT-IP]\nConfirm adding it?(y/n): y\n")])])]),a("p",[e._v("Once we added the client proceed by extracting its agent key by providing the assigned agent ID.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Choose your action: A,E,L,R or Q: e\nProvide the ID of the agent to extract the key (or '\\q' to quit): 001\nAgent key information for '001' is:\n-AGENT KEY-\n** Press Enter to return to the main menu.\n")])])]),a("p",[e._v("Next we need to go back to our OSSEC client and import our extracted agent key. Execute the command, shown in the code section below, on the agent machine and paste the key. Validate that our agent information is correct before adding it.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo /var/ossec/bin/manage_agents\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("****************************************\n* OSSEC HIDS v2.9.0 Agent Manager.     *\n* The following options are available: *\n****************************************\n    (I)mport key from the server (I).\n    (Q)uit.\nChoose your action: I or Q: i\nâ€¦\nPaste it here (or '\\q' to quit): -PASTE AGENT KEY-\nAgent information:\n    ID:001\n    Name:[CLIENT-SERVER-NAME]\n    IP Address:[OSSEC-CLIENT-IP]\nConfirm adding it?(y/n): y\n** Press ENTER to return to the main menu.\n** You must restart OSSEC for your changes to take effect.\n")])])]),a("p",[e._v("When we confirmed the agent, and have an assigned ID, go back once again to our OSSEC server and add the new agent ID within the active-response section, regarding Slack notifications, in the server's configuration file.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<active-response>\n    <command>ossec-slack</command>\n    <location>server,001</location>\n    <level>7</level>\n</active-response>\n")])])]),a("p",[e._v("At client edit the OSSEC configuration file and ensure that the server IP is correct, and the repeated offenders section as well as the email directive is set.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<ossec_config>\n    <client>\n        <server-ip>[OSSEC-HOST-IP]</server-ip>\n    </client>\n    <active-response>\n        <repeated_offenders>30,60,120,240,480</repeated_offenders>\n    </active-response>\n    <global>\n        <email_notification>no</email_notification>\n    </global>\n")])])]),a("p",[e._v("Finally reload the OSSEC server and restart the client to enable and activate OSSEC HIDS.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo /var/ossec/bin/ossec-control reload\nfoo@bar:~$ sudo /var/ossec/bin/ossec-control restart\n")])])]),a("p",[e._v("Now after a short while m/monit should alert us that OSSEC processes are indeed running on our newly added client. To confirm that OSSEC and Slack alerts works, we can trigger rule 10100: First time user logged in, by simply login to our system through SSH. Once we are satisfied and rest assured everything works accurately and that syntax for configuration files and local rules (OSSEC server) are in order, proceed by enabling active response for the agent.")]),e._v(" "),a("p",[e._v("To enable the active response (intrusion prevention) plugin add the following sections found in the code segment beneath. Be assured that all services and applications running against our client is either whitelisted or configured in a way so we do not by mistake automatically ban necessary services. To apply our changes, once weâ€™re satisfied, reload OSSEC.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<command>\n    <name>firewall-drop</name>\n    <executable>firewall-drop.sh</executable>\n    <expect>srcip</expect>\n    <timeout_allowed>yes</timeout_allowed>\n</command>\n\n<active-response>\n    <disabled>no</disabled>\n    <command>firewall-drop</command>\n    <agent_id>[UID]</agent_id>\n    <location>local</location>\n    <rules_id>[optional]</rules_id>\n    <level>6</level>\n    <timeout>600</timeout>\n</active-response>\n")])])]),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo /var/ossec/bin/ossec-control reload\n")])])]),a("h2",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('foo@bar:~$ sudo ufw allow proto udp from [AGENT/SERVER] to any port 1514 comment "OSSEC"\n')])])]),a("h2",{attrs:{id:"m-monit-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-monitoring"}},[e._v("#")]),e._v(" M/Monit monitoring")]),e._v(" "),a("p",[e._v("To monitor if the OSSEC daemons are running accordingly, we use Monit to monitor their status. Edit the Monit configuration file and add the lines below, continue with reloading the Monit daemon to apply our new monitor rules. If working correctly we shall now receive m/monit alerts saying processes is not running.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /usr/local/etc/monitrc\n")])])]),a("div",{staticClass:"language-config extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# OSSEC processes\ncheck process ossec-agentd matching "ossec-agentd"\ncheck process ossec-execd matching "ossec-execd"\ncheck process ossec-logcollector matching "ossec-logcollector"\ncheck process ossec-syscheckd matching "ossec-syscheckd"\n')])])]),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ cd /usr/local/\nfoo@bar:~$ sudo ./bin/monit reload\n")])])]),a("h3",{attrs:{id:"monitor-m-monit-failed-login-attempts-with-ossec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitor-m-monit-failed-login-attempts-with-ossec"}},[e._v("#")]),e._v(" Monitor M/Monit failed login attempts with OSSEC")]),e._v(" "),a("p",[e._v("Add the local file path in ossec.conf (client side).")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf\n")])])]),a("div",{staticClass:"language-config extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<localfile>\n    <log_format>syslog</log_format>\n    <location>/usr/local/mmonit-3.7.2/logs/error.log</location>\n</localfile>\n")])])]),a("p",[e._v("Create a custom rule on the server and increase alert level to receive slack alerts.")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/rules/local_rules.xml\n")])])]),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("rule")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("102000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("level")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("if_sid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("2501"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("if_sid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("Unauthorized, authentication failed for"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("authentication_failed,"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("User authentication failure."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("h2",{attrs:{id:"slack-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slack-notifications"}},[e._v("#")]),e._v(" Slack notifications")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ sudo nano /var/ossec/active-response/bin/ossec-slack.sh\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Make sure that the log path only has one backtrail /../")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CHANNEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"#example"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SITE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"webhook url"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SOURCE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ossec2slack"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Logging")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LOCAL")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PWD")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$3")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$4")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$5")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$7")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$8")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PWD")]),e._v("}")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/logs/active-responses.log\n")])])]),a("h2",{attrs:{id:"integrating-cloudflare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrating-cloudflare"}},[e._v("#")]),e._v(" Integrating Cloudflare")]),e._v(" "),a("h2",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),a("p",[e._v("To upgrade to OSSEC 3.3.0 using the PCRE2 package simply download the package and install and upgrade OSSEC as normal:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz\n$ tar -zxvf pcre2-10.32.tar.gz -C src/external/\n$ sudo ./install\n")])])]),a("p",[e._v("To upgrade OSSEC simply download the "),a("a",{attrs:{href:"https://github.com/ossec/ossec-hids/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest release"),a("OutboundLink")],1),e._v(", extract the file and run the install script.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("OSSEC HIDS v2.9.3 Installation Script - http://www.ossec.net\n\nYou are about to start the installation process of the OSSEC HIDS.\nYou must have a C compiler pre-installed in your system.\n\n    - System: Linux hostname 4.4.0-116-generic\n    - User: root\n    - Host: hostname\n\n-- Press ENTER to continue or Ctrl-C to abort. --\n\n- You already have OSSEC installed. Do you want to update it? (y/n): y\n")])])]),a("h2",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command-line")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Command")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("/var/ossec/bin/agent_control -lc")]),e._v(" "),a("td",[e._v("List all active agents")])]),e._v(" "),a("tr",[a("td",[e._v("/var/ossec/bin/ossec-logtest")]),e._v(" "),a("td",[e._v("Logtest")])]),e._v(" "),a("tr",[a("td",[e._v("/var/ossec/bin/ossec-control")]),e._v(" "),a("td",[e._v("start,stop,reload,restart,status,enable,disable")])]),e._v(" "),a("tr",[a("td",[e._v("/var/ossec/bin/manage_agents")]),e._v(" "),a("td",[e._v("manage agents (e.g., add, remove)")])])])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("If you encounter any issue or having questions regarding OSSEC I recommend using their very helpful "),a("a",{attrs:{href:"https://groups.google.com/forum/#!forum/ossec-list",target:"_blank",rel:"noopener noreferrer"}},[e._v("mailing list"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"duplicate-counter-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-counter-error"}},[e._v("#")]),e._v(" Duplicate counter error")]),e._v(" "),a("p",[e._v("In the OSSEC log /var/ossec/logs/ossec.log, you might notice that the log gets filled with warnings and errors as shown below.")]),e._v(" "),a("div",{staticClass:"language-log extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2019/02/21 13:33:21 ossec-remoted: WARN: Duplicate error: [...]\n2019/02/21 13:33:21 ossec-remoted(1407): ERROR: Duplicated counter for [...]\n")])])]),a("p",[e._v("Stop both the OSSEC manager and the agent. In the agent server go to /var/ossec/queue/rids and remove all the files within the folder. At the manager server go into /var/ossec/queue/rids remove the file corresponding to the agents ID. Do not delete the sender_counter. Restart both.")]),e._v(" "),a("p",[e._v("Or disable the feature by editing /var/ossec/etc/internal_options.conf")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# Verify msg id (set to 0 to disable it)\nremoted.verify_msg_id=0\n")])])]),a("p",[e._v("Save and restart.")]),e._v(" "),a("h3",{attrs:{id:"build-essential"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-essential"}},[e._v("#")]),e._v(" build-essential")]),e._v(" "),a("p",[e._v("If receiving build error "),a("code",[e._v("./install.sh: 105: make: not found")]),e._v(" install the build-essential package.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo apt-get install build-essential\n")])])]),a("h3",{attrs:{id:"libevent-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libevent-dev"}},[e._v("#")]),e._v(" libevent-dev")]),e._v(" "),a("p",[e._v("If receiving the build error below install the libevent development package "),a("code",[e._v("sudo apt-get install libevent-dev")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("os_maild/sendmail.c:12:10: fatal error: event.h: No such file or directory\n12 | #include <event.h>\n   |          ^~~~~~~~~\ncompilation terminated.\nmake: *** [Makefile:926: os_maild/sendmail.o] Error 1\n")])])]),a("h3",{attrs:{id:"pcre2-libpcre2-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcre2-libpcre2-dev"}},[e._v("#")]),e._v(" pcre2 & libpcre2-dev")]),e._v(" "),a("p",[e._v("If receiving the build error "),a("code",[e._v("./os_regex/os_regex.h:19:10: fatal error: pcre2.h: No such file or directory")]),e._v(" download and install pcre2 package (version 10.32) found "),a("a",{attrs:{href:"https://ftp.pcre.org/pub/pcre/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo@bar:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz\nfoo@bar:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/\n")])])]),a("p",[e._v("If the build error persist make sure to install the libpcre2 development package "),a("code",[e._v("sudo apt-get install libpcre2-dev")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"zlib1g-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zlib1g-dev"}},[e._v("#")]),e._v(" zlib1g-dev")]),e._v(" "),a("p",[e._v("If receving the build error "),a("code",[e._v("os_zlib/os_zlib.c:13:10: fatal error: zlib.h: No such file or directory")]),e._v(" install the zlib1g development package "),a("code",[e._v("sudo apt-get install zlib1g-dev")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"libssl-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libssl-dev"}},[e._v("#")]),e._v(" libssl-dev")]),e._v(" "),a("p",[e._v("If receiving the build error "),a("code",[e._v("./external/compat/includes.h:65:10: fatal error: openssl/opensslv.h: No such file or directory")]),e._v("install the libssl development package "),a("code",[e._v("sudo apt-get install libssl-dev")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);