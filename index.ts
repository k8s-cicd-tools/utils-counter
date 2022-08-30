import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";


const appLabels = { app: "counter" };
const deployment = new k8s.apps.v1.Deployment("counter", {
    metadata: {namespace: "default"},
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: {
                containers: [{
                    name: "count",
                    image: "busybox",
                    args: ["/bin/sh", "-c", "i=0; while true; do echo \"Thanks for visiting devopscube! $i\"; i=$((i+1)); sleep 1; done"],
                }],
                }
            }
        }
    }
);

export const name = deployment.metadata.name;
