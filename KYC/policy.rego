package persona_kyc

# Deny by default
default allow := false

# Wasm data
inquiry := data.data
status := inquiry.status
name_first := inquiry.name_first
name_last := inquiry.name_last

allow if {
    status == "approved"
    name_first != ""
    name_last != ""
}
