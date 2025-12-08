# Newton Quickstart KYC Policy
# --------------------------------

package quickstart_kyc

# Deny by default
default allow := false

# From Policy Data
kyc_status := data.data.kyc_status
name_first := data.data.name_first
name_last := data.data.name_last

allow if {
    kyc_status == "approved"
    name_first != ""
    name_last != ""
}
