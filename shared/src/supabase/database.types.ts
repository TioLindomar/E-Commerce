export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      order_items: {
        Row: {
          created_at: string | null
          created_at_tz: string | null
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number | null
        }
        Insert: {
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price?: number | null
        }
        Update: {
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_order_items_order_id"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_order_items_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_order_items_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "vw_user_favorite_products_info"
            referencedColumns: ["product_id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          created_at_tz: string | null
          id: string
          order_status: string
          shipping_adress: Json
          total_price: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          order_status: string
          shipping_adress: Json
          total_price: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          order_status?: string
          shipping_adress?: Json
          total_price?: number
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          attributes: Json
          category: string
          created_at: string | null
          created_at_tz: string | null
          id: string
          name: string
          price: number
        }
        Insert: {
          attributes: Json
          category: string
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          name: string
          price: number
        }
        Update: {
          attributes?: Json
          category?: string
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          name?: string
          price?: number
        }
        Relationships: []
      }
      user_adresses: {
        Row: {
          city: string
          created_at: string | null
          created_at_tz: string | null
          id: string
          neighborhood: string
          number: string
          state: string
          street: string
          user_id: string
          zip_code: string
        }
        Insert: {
          city: string
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          neighborhood: string
          number: string
          state: string
          street: string
          user_id: string
          zip_code: string
        }
        Update: {
          city?: string
          created_at?: string | null
          created_at_tz?: string | null
          id?: string
          neighborhood?: string
          number?: string
          state?: string
          street?: string
          user_id?: string
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_adresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_adresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "vw_user_favorite_products_info"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_adresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "vw_user_info_and_full_adress"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_favorite_products: {
        Row: {
          created_at: string
          created_at_tz: string | null
          id: string
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          created_at_tz?: string | null
          id?: string
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          created_at_tz?: string | null
          id?: string
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorite_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_favorite_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "vw_user_favorite_products_info"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "user_favorite_products_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_favorite_products_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "vw_user_favorite_products_info"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_favorite_products_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "vw_user_info_and_full_adress"
            referencedColumns: ["user_id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          created_at_tz: string
          email: string
          id: string
          isAdmin: boolean
          name: string
        }
        Insert: {
          created_at?: string
          created_at_tz?: string
          email: string
          id?: string
          isAdmin?: boolean
          name: string
        }
        Update: {
          created_at?: string
          created_at_tz?: string
          email?: string
          id?: string
          isAdmin?: boolean
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      vw_user_favorite_products_info: {
        Row: {
          attributes: Json | null
          category: string | null
          email: string | null
          isAdmin: boolean | null
          price: number | null
          product_id: string | null
          product_name: string | null
          user_id: string | null
          user_name: string | null
        }
        Relationships: []
      }
      vw_user_info_and_full_adress: {
        Row: {
          city: string | null
          email: string | null
          isAdmin: boolean | null
          name: string | null
          neighborhood: string | null
          number: string | null
          state: string | null
          street: string | null
          user_id: string | null
          zip_code: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
