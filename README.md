## Utils - Counter 

Very basic pod for log writing tests. Contains the Kubernetes manifests, the implementation using Pulumi and the pipeline Jenkinsfile.

## How to get started

1. Install kubectl and pulumi.
2. Clone this repo.
3. Run `$ npm install`
4. Run `$ pulumi up` to create the kubernetes resources.
5. Run `$ kubectl get pods` to see the pods.
6. Run `$ kubectl logs <pod-name>` to see the logs.
7. Run `$ pulumi destroy` to delete the kubernetes resources.

Alternatively, you can use kubectl directly:

```
$ kubectl apply -f path/to/kubernetes/manifests/counter-pod.yaml
$ kubectl get pods
$ kubectl logs <pod-name>
$ kubectl delete -f path/to/kubernetes/manifests/counter-pod.yaml
```

Alternatively, you can use the Jenkinsfile to run the pipeline:

| Jenkinsfile                        | Description                                |
|------------------------------------|--------------------------------------------|
| jenkins/Jenkinsfile-pulumi-up      | This will create the kubernetes resources. |
| jenkins/Jenkinsfile-pulumi-destroy | This will delete the kubernetes resources. |

Environment variables required by Jenkins:

| Name                               | Description                                |
|------------------------------------|--------------------------------------------|
| PULUMI_ACCESS_TOKEN     | Is the access token for the Pulumi account. It is recommended to create a key with the same name in the credential manager. |

configure the Pipeline script from SCM with this repository, select the Branch and change the Jenkinsfile path to the corresponding option to deploy.

## Output log
"Thanks for visiting devopscube! 1"

"Thanks for visiting devopscube! 2"

"Thanks for visiting devopscube! 3"

...

"Thanks for visiting devopscube! n"


## Resources and Dependencies

| Name       | Version | Required |
|------------|---------|----------|
| kubernetes | 1.23    | no       |
| pulumi     | 3.38.0  | no       |
| busybox    | latest  | no       |



