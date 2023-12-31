export default {
    // 后端接口路径
    loginAuth: 'http://localhost:9090/api/v1/login',
    k8sWorkflowCreate: 'http://localhost:9090/api/v2/k8s/workflow/create',
    k8sWorkflowDetail: 'http://localhost:9090/api/v2/k8s/workflow/detail',
    k8sWorkflowList: 'http://localhost:9090/api/v2/k8s/workflows',
    k8sWorkflowDel: 'http://localhost:9090/api/v2/k8s/workflow/del',
    k8sDeploymentList: 'http://localhost:9090/api/v1/k8s/deployments',
    k8sDeploymentDetail: 'http://localhost:9090/api/v1/k8s/deployment/detail',
    k8sDeploymentUpdate: 'http://localhost:9090/api/v1/k8s/deployment/update',
    k8sDeploymentScale: 'http://localhost:9090/api/v1/k8s/deployment/scale',
    k8sDeploymentRestart: 'http://localhost:9090/api/v1/k8s/deployment/restart',
    k8sDeploymentDel: 'http://localhost:9090/api/v1/k8s/deployment/del',
    k8sDeploymentCreate: 'http://localhost:9090/api/v1/k8s/deployment/create',
    k8sDeploymentNumNp: 'http://localhost:9090/api/v1/k8s/deployment/numnp',
    k8sPodList: 'http://localhost:9090/api/v1/k8s/pods',
    k8sPodDetail: 'http://localhost:9090/api/v1/k8s/pod/detail',
    k8sPodUpdate: 'http://localhost:9090/api/v1/k8s/pod/update',
    k8sPodDel: 'http://localhost:9090/api/v1/k8s/pod/del',
    k8sPodContainer: 'http://localhost:9090/api/v1/k8s/pod/container',
    k8sPodLog: 'http://localhost:9090/api/v1/k8s/pod/log',
    k8sPodNumNp: 'http://localhost:9090/api/v1/k8s/pod/numnp',
    k8sDaemonSetList: 'http://localhost:9090/api/v1/k8s/daemonsets',
    k8sDaemonSetDetail: 'http://localhost:9090/api/v1/k8s/daemonset/detail',
    k8sDaemonSetUpdate: 'http://localhost:9090/api/v1/k8s/daemonset/update',
    k8sDaemonSetDel: 'http://localhost:9090/api/v1/k8s/daemonset/del',
    k8sStatefulSetList: 'http://localhost:9090/api/v1/k8s/statefulsets',
    k8sStatefulSetDetail: 'http://localhost:9090/api/v1/k8s/daemonset/detail',
    k8sStatefulSetUpdate: 'http://localhost:9090/api/v1/k8s/daemonset/update',
    k8sStatefulSetDel: 'http://localhost:9090/api/v1/k8s/daemonset/del',
    k8sServiceList: 'http://localhost:9090/api/v2/k8s/services',
    k8sServiceDetail: 'http://localhost:9090/api/v2/k8s/service/detail',
    k8sServiceUpdate: 'http://localhost:9090/api/v2/k8s/service/update',
    k8sServiceDel: 'http://localhost:9090/api/v2/k8s/service/del',
    k8sServiceCreate: 'http://localhost:9090/api/v2/k8s/service/create',
    k8sIngressList: 'http://localhost:9090/api/v2/k8s/ingresses',
    k8sIngressDetail: 'http://localhost:9090/api/v2/k8s/ingress/detail',
    k8sIngressUpdate: 'http://localhost:9090/api/v2/k8s/ingress/update',
    k8sIngressDel: 'http://localhost:9090/api/v2/k8s/ingress/del',
    k8sIngressCreate: 'http://localhost:9090/api/v2/k8s/ingress/create',
    k8sConfigMapList: 'http://localhost:9090/api/v2/k8s/configmaps',
    k8sConfigMapDetail: 'http://localhost:9090/api/v2/k8s/configmap/detail',
    k8sConfigMapUpdate: 'http://localhost:9090/api/v2/k8s/configmap/update',
    k8sConfigMapDel: 'http://localhost:9090/api/v2/k8s/configmap/del',
    k8sSecretList: 'http://localhost:9090/api/v2/k8s/secrets',
    k8sSecretDetail: 'http://localhost:9090/api/v2/k8s/secret/detail',
    k8sSecretUpdate: 'http://localhost:9090/api/v2/k8s/secret/update',
    k8sSecretDel: 'http://localhost:9090/api/v2/k8s/secret/del',
    k8sPvcList: 'http://localhost:9090/api/v2/k8s/pvcs',
    k8sPvcDetail: 'http://localhost:9090/api/v2/k8s/pvc/detail',
    k8sPvcUpdate: 'http://localhost:9090/api/v2/k8s/pvc/update',
    k8sPvcDel: 'http://localhost:9090/api/v2/k8s/pvc/del',
    k8sNodeList: 'http://localhost:9090/api/v1/k8s/nodes',
    k8sNodeDetail: 'http://localhost:9090/api/v1/k8s/node/detail',
    k8sNamespaceList: 'http://localhost:9090/api/v1/k8s/namespaces',
    k8sNamespaceDetail: 'http://localhost:9090/api/v1/k8s/namespace/detail',
    k8sNamespaceDel: 'http://localhost:9090/api/v1/k8s/namespace/del',
    k8sPvList: 'http://localhost:9090/api/v1/k8s/pvs',
    k8sPvDetail: 'http://localhost:9090/api/v1/k8s/pv/detail',
    k8sTerminalWs: 'ws://localhost:8081/ws',

    // codemirror 编辑器配置
    cmOptions: {
        // 语言及语法模式
        mode: 'text/yaml',
        // 主题
        theme: 'idea',
        // 显示行数
        lineNumbers: true,
        smartIndent: true, // 智能缩进
        indentUnit: 4, // 智能缩进单元长度为 4 个空格
        styleActiveLine: true, // 显示选中行的样式
        matchBrackets: true, // 每当光标位于匹配的方括号旁边时，都会使其高亮显示
        readOnly: false,
        lineWrapping: true // 自动换行
    }
}