# Chainalysis Sanctions Policy
# --------------------------------

package quickstart_ofac_kyc

# By default, deny requests.
default allow := false

# From Intent
to_address := input.to

# From Policy Data
kyc_status := data.data.kyc_status
name_first := data.data.name_first
name_last := data.data.name_last
checked_address := data.data.address
is_sanctioned := data.data.sanctioned


# Allow the action if the `to` address is not sanctioned
allow if {
    kyc_status == "approved"
    name_first != ""
    name_last != ""
    lower(checked_address) == lower(to_address)
    not is_sanctioned
}
