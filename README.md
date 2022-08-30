## Utils - Counter 

Very basic pod for log writing tests. Contains the kubernetes manifests and the implementation using pulumi.

## How to get started

1. Install kubectl and pulumi.
2. Clone this repo.
3. Run `$ pulumi up` to create the kubernetes resources.
4. Run `$ kubectl get pods` to see the pods.
5. Run `$ kubectl logs <pod-name>` to see the logs.
6. Run `$ pulumi destroy` to delete the kubernetes resources.

Alternatively, you can use kubectl directly:

```
$ kubectl apply -f path/to/kubernetes/manifests
$ kubectl get pods
$ kubectl logs <pod-name>
$ kubectl delete -f ./kubernetes/
```

## Output log
"Thanks for visiting devopscube! 1"

"Thanks for visiting devopscube! 2"

"Thanks for visiting devopscube! 3"

...

"Thanks for visiting devopscube! n"


## kubernetes manifest

``` yaml
apiVersion: v1
kind: Pod
metadata:
  name: counter
  namespace: default
spec:
  containers:
  - name: count
    image: busybox
    args: [/bin/sh, -c,'i=0; while true; do echo "Thanks for visiting devopscube! $i"; i=$((i+1)); sleep 1; done']
```




## Resources and Dependencies

| Name       | Version | Required |
|------------|------|------|
| kubernetes | 1.23 | no |
| pulumi     | 3.38.0 | no |
| busybox    | latest | no |



