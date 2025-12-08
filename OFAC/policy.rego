# Newton Quickstart OFAC Policy
# --------------------------------

package quickstart_ofac

# By default, deny requests.
default allow := false

# From Intent
to_address := input.to

# From Policy Data
checked_address := data.data.address
is_sanctioned := data.data.sanctioned

# Allow the action if the `to` address is not sanctioned
allow if {
    lower(checked_address) == lower(to_address)
    not is_sanctioned
}
